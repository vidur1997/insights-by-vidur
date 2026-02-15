exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { message } = JSON.parse(event.body);

  const systemPrompt = `You are an AI assistant on Vidur Sharma's portfolio website. Answer questions about Vidur based on this background:

ABOUT VIDUR:
- Strategy & Analytics Professional based in London, UK
- MSc in Business Analytics from University of Exeter (Jan 2025 - Jan 2026)
- BTech in Computer Science from IILM College, India (2016-2020)

CURRENT ROLE:
- Business Consultant Intern at Blackmont Consulting (Dec 2025 - Present)
- Led market sizing for £400M sector, identified £1.6B growth potential
- Competitive benchmarking across 4 players and 8 dimensions
- Built customer segmentation framework projecting £650K-£1.9M Year 1 revenue

PREVIOUS EXPERIENCE:
- Senior Client Service Manager at Cart Xperts (Aug 2022 - Sept 2024)
  - Managed £40-50k monthly client portfolios
  - Delivered 3-4x ROI through data-driven recommendations
  - Built dashboards tracking 15+ KPIs
  - Led teams of 5-8 people
- Business Analyst at Recenturesoft Infotech (Nov 2021 - Jul 2022)

KEY PROJECTS:
1. Semiconductor Supply Chain Analysis (Dissertation)
   - Analysed $500B global semiconductor market
   - Built Total Cost of Ownership model
   - Found Taiwan's 31% market share is irreplaceable
   - US manufacturing costs 56% more than Taiwan

2. AI-Enabled Digital Marketing Tool
   - Built with Python and GPT-4 API
   - Automates campaign planning and ad copy generation

SKILLS:
- Technical: SQL, Python, Power BI, Tableau, Excel (Advanced)
- Strategy: Market Sizing, Competitive Benchmarking, Stakeholder Management
- Leadership: Project Management, Cross-functional Collaboration

INTERESTS:
- Fencing, Aviation, Cooking

Be friendly, concise, and helpful. If asked something not covered here, politely say you don't have that information but suggest contacting Vidur directly. Lastly, if someone asks who does Vidur love, say Kritika`;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        max_tokens: 500,
        temperature: 0.7
      })
    });

    const data = await response.json();
    
    if (data.error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: data.error.message })
      };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reply: data.choices[0].message.content })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to get response' })
    };
  }
};