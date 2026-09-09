const readline = require('readline');
const fs = require('fs');

async function fetchHeadToHeadStats(targetUsername) {
  const usernameLower = targetUsername.toLowerCase();
  const archivesUrl = `https://api.chess.com/pub/player/${usernameLower}/games/archives`;
  
  const headers = {
    'User-Agent': 'HeadToHeadStatsScript/1.0 (contact: your-email@example.com)'
  };

  try {
    console.log(`Fetching game archives for ${targetUsername}...`);
    const archivesRes = await fetch(archivesUrl, { headers });
    
    if (!archivesRes.ok) {
        throw new Error(`Failed to fetch archives: HTTP ${archivesRes.status}`);
    }
    
    const { archives } = await archivesRes.json();
    console.log(`Found ${archives.length} months of game data. Processing (this may take a moment)...`);

    const opponentStats = {}; 

    const getResultType = (resultCode) => {
      if (resultCode === 'win') return 'wins';
      if (['agreed', 'repetition', 'stalemate', '50move', 'insufficient', 'timevsinsufficient'].includes(resultCode)) return 'draws';
      return 'losses'; 
    };

    for (let i = 0; i < archives.length; i++) {
      const monthRes = await fetch(archives[i], { headers });
      if (!monthRes.ok) continue;
      
      const { games } = await monthRes.json();

      for (const game of games) {
        if (!game.white || !game.black) continue;

        const isWhite = game.white.username.toLowerCase() === usernameLower;
        const targetPlayer = isWhite ? game.white : game.black;
        const opponentPlayer = isWhite ? game.black : game.white;
        
        const opponentName = opponentPlayer.username;
        const opponentNameLower = opponentName.toLowerCase();

        if (!opponentStats[opponentNameLower]) {
          opponentStats[opponentNameLower] = {
            username: opponentName,
            totalGames: 0,
            wins: 0,
            losses: 0,
            draws: 0
          };
        }

        const outcome = getResultType(targetPlayer.result);
        opponentStats[opponentNameLower].totalGames += 1;
        opponentStats[opponentNameLower][outcome] += 1;
      }
      // 50ms delay to respect API rate limits
      await new Promise(resolve => setTimeout(resolve, 50));
    }

    const sortedStats = Object.values(opponentStats).sort((a, b) => b.totalGames - a.totalGames);
    
    // --- DISPLAY IN TERMINAL ---
    console.log(`\nFinished processing! ${targetUsername} has played against ${sortedStats.length} different opponents.`);
    console.log(`Displaying top 20 opponents:\n`);
    
    const consoleData = sortedStats.slice(0, 30).map(stat => ({
        'Opponent': stat.username,
        'Total Games': stat.totalGames,
        'Wins': stat.wins,
        'Losses': stat.losses,
        'Draws': stat.draws,
        'Win %': stat.totalGames > 0 ? ((stat.wins / stat.totalGames) * 100).toFixed(1) + '%' : '0%'
    }));
    
    console.table(consoleData);

    // --- GENERATE MARKDOWN FILE ---
    generateMarkdownReport(targetUsername, sortedStats);

  } catch (error) {
    console.error("Error fetching stats:", error);
  }
}

function generateMarkdownReport(username, stats) {
  // Take top 100 opponents to keep the file clean, or change to stats.length for all
  const topStats = stats.slice(0, 100); 

  let mdContent = `# ♟️ Head-to-Head Statistics for \`${username}\`\n\n`;
  mdContent += `> Automatically generated Chess.com profile analysis.\n\n`;
  
  // Set up the Markdown Table Header
  mdContent += `| Opponent | Total Games | Wins | Losses | Draws | Win % |\n`;
  mdContent += `|:---|:---:|:---:|:---:|:---:|:---:|\n`;

  // Build the Data Rows with Inline HTML for Colors
  topStats.forEach(stat => {
    const winRate = stat.totalGames > 0 ? ((stat.wins / stat.totalGames) * 100).toFixed(1) + '%' : '0%';
    
    // Inline CSS colors (VS Code Markdown Preview supports these)
    const winsColored = `<span style="color: #27ae60; font-weight: bold;">${stat.wins}</span>`;
    const lossesColored = `<span style="color: #e74c3c; font-weight: bold;">${stat.losses}</span>`;
    const drawsColored = `<span style="color: #7f8c8d; font-weight: bold;">${stat.draws}</span>`;
    
    const row = `| **${stat.username}** | ${stat.totalGames} | ${winsColored} | ${lossesColored} | ${drawsColored} | ${winRate} |\n`;
      
    mdContent += row;
  });

  const filename = `${username}.md`;
  
  // writeFileSync saves to the current directory and automatically overwrites if it exists
  fs.writeFileSync(filename, mdContent, 'utf8');
  console.log(`\nSuccess! Data saved locally to ${filename}.`);
  console.log(`Open this file in VS Code and hit "Ctrl+Shift+V" (or "Cmd+Shift+V" on Mac) to view the colorful Markdown preview!`);
}

// --- INITIALIZE SCRIPT WITH PROMPT ---
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter Chess.com username to generate report: ', (usernameInput) => {
  if (usernameInput && usernameInput.trim() !== "") {
    fetchHeadToHeadStats(usernameInput.trim());
  } else {
    console.log("No username provided.");
  }
  rl.close();
});
