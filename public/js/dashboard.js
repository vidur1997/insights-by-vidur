// Marketing Performance Dashboard v2.0
// Multi-client, multi-tab dashboard with working filters

const { useState, useEffect, useMemo } = React;
const { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  ComposedChart, Area, RadialBarChart, RadialBar
} = Recharts;

// Colors
const COLORS = {
  primary: '#00ffaa',
  secondary: '#00aaff', 
  accent: '#ff9f00',
  danger: '#ff6b6b',
  purple: '#a855f7',
  text: '#ffffff',
  muted: '#888888',
  background: '#1a1a1a',
  cardBg: 'rgba(0, 0, 0, 0.3)'
};

const CHART_COLORS = ['#00ffaa', '#00aaff', '#ff9f00', '#ff6b6b', '#a855f7'];

// ============ DATE RANGE SCALING ============
const getDateMultiplier = (dateRange) => {
  switch(dateRange) {
    case '7days': return 0.233; // 7/30
    case '30days': return 1;
    case '90days': return 3;
    default: return 1;
  }
};

const scaleValue = (value, multiplier, isRate = false) => {
  if (isRate) return value; // Don't scale rates/percentages
  return Math.round(value * multiplier);
};

const scaleData = (originalData, dateRange) => {
  const multiplier = getDateMultiplier(dateRange);
  if (multiplier === 1) return originalData; // No scaling needed for 30 days
  
  // Deep clone and scale the data
  const data = JSON.parse(JSON.stringify(originalData));
  
  // Scale overall KPIs
  data.overall.totalSpend = scaleValue(data.overall.totalSpend, multiplier);
  data.overall.totalRevenue = scaleValue(data.overall.totalRevenue, multiplier);
  data.overall.totalLeads = scaleValue(data.overall.totalLeads, multiplier);
  data.overall.totalImpressions = scaleValue(data.overall.totalImpressions, multiplier);
  data.overall.totalClicks = scaleValue(data.overall.totalClicks, multiplier);
  data.overall.totalConversions = scaleValue(data.overall.totalConversions, multiplier);
  // ROAS, CTR, Conv Rate stay the same (they're ratios)
  
  // Scale paid media
  data.paidMedia.kpis.spend = scaleValue(data.paidMedia.kpis.spend, multiplier);
  data.paidMedia.kpis.impressions = scaleValue(data.paidMedia.kpis.impressions, multiplier);
  data.paidMedia.kpis.clicks = scaleValue(data.paidMedia.kpis.clicks, multiplier);
  data.paidMedia.kpis.conversions = scaleValue(data.paidMedia.kpis.conversions, multiplier);
  data.paidMedia.kpis.revenue = scaleValue(data.paidMedia.kpis.revenue, multiplier);
  
  // Scale channels
  data.paidMedia.channels = data.paidMedia.channels.map(channel => ({
    ...channel,
    spend: scaleValue(channel.spend, multiplier),
    impressions: scaleValue(channel.impressions, multiplier),
    clicks: scaleValue(channel.clicks, multiplier),
    leads: scaleValue(channel.leads, multiplier),
    conversions: scaleValue(channel.conversions, multiplier),
    revenue: scaleValue(channel.revenue, multiplier)
  }));
  
  // Scale objectives
  data.paidMedia.objectives = data.paidMedia.objectives.map(obj => ({
    ...obj,
    spend: scaleValue(obj.spend, multiplier),
    conversions: scaleValue(obj.conversions, multiplier)
  }));
  
  // Scale campaigns
  data.paidMedia.campaigns = data.paidMedia.campaigns.map(campaign => ({
    ...campaign,
    spend: scaleValue(campaign.spend, multiplier),
    impressions: scaleValue(campaign.impressions, multiplier),
    clicks: scaleValue(campaign.clicks, multiplier),
    leads: scaleValue(campaign.leads, multiplier),
    conversions: scaleValue(campaign.conversions, multiplier)
  }));
  
  // Scale daily data (slice based on range)
  if (dateRange === '7days') {
    data.paidMedia.dailyData = data.paidMedia.dailyData.slice(0, 7);
  } else if (dateRange === '90days') {
    // Duplicate and scale for 90 days
    const baseData = data.paidMedia.dailyData;
    const extendedData = [];
    for (let month = 0; month < 3; month++) {
      baseData.forEach((day, idx) => {
        const variance = 0.8 + Math.random() * 0.4; // 80-120% variance
        extendedData.push({
          date: `${['Dec', 'Jan', 'Feb'][month]} ${idx + 1}`,
          spend: Math.round(day.spend * variance),
          impressions: Math.round(day.impressions * variance),
          clicks: Math.round(day.clicks * variance),
          conversions: Math.round(day.conversions * variance),
          revenue: Math.round(day.revenue * variance)
        });
      });
    }
    data.paidMedia.dailyData = extendedData.slice(0, 30); // Show 30 data points max
  }
  
  // Scale SEO data
  data.seo.kpis.organicSessions = scaleValue(data.seo.kpis.organicSessions, multiplier);
  data.seo.kpis.organicLeads = scaleValue(data.seo.kpis.organicLeads, multiplier);
  data.seo.kpis.organicConversions = scaleValue(data.seo.kpis.organicConversions, multiplier);
  data.seo.kpis.organicRevenue = scaleValue(data.seo.kpis.organicRevenue, multiplier);
  
  // Scale keyword traffic
  data.seo.keywords = data.seo.keywords.map(kw => ({
    ...kw,
    traffic: scaleValue(kw.traffic, multiplier)
  }));
  
  // Scale top pages
  data.seo.topPages = data.seo.topPages.map(page => ({
    ...page,
    sessions: scaleValue(page.sessions, multiplier),
    conversions: scaleValue(page.conversions, multiplier)
  }));
  
  // Scale social data
  data.social.kpis.followerGrowth = scaleValue(data.social.kpis.followerGrowth, multiplier);
  data.social.kpis.totalReach = scaleValue(data.social.kpis.totalReach, multiplier);
  data.social.kpis.totalImpressions = scaleValue(data.social.kpis.totalImpressions, multiplier);
  data.social.kpis.videoViews = scaleValue(data.social.kpis.videoViews, multiplier);
  data.social.kpis.shares = scaleValue(data.social.kpis.shares, multiplier);
  data.social.kpis.comments = scaleValue(data.social.kpis.comments, multiplier);
  
  // Scale platforms
  data.social.platforms = data.social.platforms.map(platform => ({
    ...platform,
    reach: scaleValue(platform.reach, multiplier),
    posts: scaleValue(platform.posts, multiplier)
  }));
  
  // Scale top posts
  data.social.topPosts = data.social.topPosts.map(post => ({
    ...post,
    reach: scaleValue(post.reach, multiplier),
    engagement: scaleValue(post.engagement, multiplier),
    shares: scaleValue(post.shares, multiplier)
  }));
  
  // Scale funnel
  data.funnel.impressions = scaleValue(data.funnel.impressions, multiplier);
  data.funnel.reach = scaleValue(data.funnel.reach, multiplier);
  data.funnel.clicks = scaleValue(data.funnel.clicks, multiplier);
  data.funnel.leads = scaleValue(data.funnel.leads, multiplier);
  data.funnel.conversions = scaleValue(data.funnel.conversions, multiplier);
  
  return data;
};

// ============ UTILITY COMPONENTS ============

const formatNumber = (num) => {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toLocaleString();
};

const formatCurrency = (num) => {
  if (num >= 1000000) return '$' + (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return '$' + (num / 1000).toFixed(1) + 'K';
  return '$' + num.toLocaleString();
};

// Custom Tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="tooltip-label">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.name}: {typeof entry.value === 'number' ? 
              (entry.name.toLowerCase().includes('spend') || entry.name.toLowerCase().includes('revenue') ? 
                formatCurrency(entry.value) : formatNumber(entry.value)) 
              : entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// KPI Card Component
const KPICard = ({ label, value, trend, prefix = '', suffix = '', small = false }) => {
  const isPositive = trend >= 0;
  const isInverse = label.toLowerCase().includes('cpc') || label.toLowerCase().includes('bounce');
  const trendClass = isInverse ? 
    (trend <= 0 ? 'positive' : 'negative') : 
    (isPositive ? 'positive' : 'negative');
  
  return (
    <div className={`kpi-card ${small ? 'kpi-card-small' : ''}`}>
      <div className="kpi-label">{label}</div>
      <div className="kpi-value">
        {prefix}{typeof value === 'number' ? (value >= 1000 ? formatNumber(value) : value.toLocaleString()) : value}{suffix}
      </div>
      {trend !== undefined && (
        <div className={`kpi-trend ${trendClass}`}>
          {isPositive ? '↑' : '↓'} {Math.abs(trend)}%
        </div>
      )}
    </div>
  );
};

// Tab Component
const TabButton = ({ active, onClick, children, icon }) => (
  <button 
    className={`tab-button ${active ? 'active' : ''}`}
    onClick={onClick}
  >
    <span className="tab-icon">{icon}</span>
    <span className="tab-text">{children}</span>
  </button>
);

// Section Header
const SectionHeader = ({ icon, title, subtitle }) => (
  <div className="section-header">
    <span className="section-icon">{icon}</span>
    <div>
      <h3 className="section-title">{title}</h3>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  </div>
);

// ============ OVERVIEW TAB ============
const OverviewTab = ({ data }) => {
  const channelMix = data.paidMedia.channels.map(c => ({
    name: c.name.replace(' Ads', ''),
    value: c.spend
  }));

  const topCampaigns = [...data.paidMedia.campaigns]
    .sort((a, b) => b.roas - a.roas)
    .slice(0, 5);

  return (
    <div className="tab-content">
      {/* Channel Mix & Performance */}
      <div className="grid-2">
        <div className="card">
          <SectionHeader icon="📊" title="Channel Mix" subtitle="Spend distribution by channel" />
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={channelMix}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {channelMix.map((entry, index) => (
                  <Cell key={index} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => formatCurrency(value)} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <SectionHeader icon="📈" title="Performance Trend" subtitle="Daily spend vs revenue" />
          <ResponsiveContainer width="100%" height={250}>
            <ComposedChart data={data.paidMedia.dailyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="date" tick={{ fill: '#888', fontSize: 11 }} />
              <YAxis yAxisId="left" tick={{ fill: '#888', fontSize: 11 }} />
              <YAxis yAxisId="right" orientation="right" tick={{ fill: '#888', fontSize: 11 }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar yAxisId="left" dataKey="spend" name="Spend" fill={COLORS.primary} opacity={0.8} />
              <Line yAxisId="right" type="monotone" dataKey="revenue" name="Revenue" stroke={COLORS.secondary} strokeWidth={2} dot={false} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Campaigns & Funnel */}
      <div className="grid-2">
        <div className="card">
          <SectionHeader icon="🏆" title="Top Campaigns by ROAS" subtitle="Best performing campaigns" />
          <table className="data-table">
            <thead>
              <tr>
                <th>Campaign</th>
                <th>Channel</th>
                <th>ROAS</th>
                <th>Spend</th>
              </tr>
            </thead>
            <tbody>
              {topCampaigns.map((campaign, index) => (
                <tr key={index}>
                  <td>{campaign.name}</td>
                  <td>{campaign.channel}</td>
                  <td style={{ color: COLORS.primary }}>{campaign.roas}x</td>
                  <td>{formatCurrency(campaign.spend)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card">
          <SectionHeader icon="🔻" title="Conversion Funnel" subtitle="Full funnel performance" />
          <div className="funnel-container">
            {[
              { label: 'Impressions', value: data.funnel.impressions },
              { label: 'Reach', value: data.funnel.reach },
              { label: 'Clicks', value: data.funnel.clicks },
              { label: 'Leads', value: data.funnel.leads },
              { label: 'Conversions', value: data.funnel.conversions }
            ].map((step, index, arr) => (
              <div className="funnel-step" key={step.label}>
                <span className="funnel-label">{step.label}</span>
                <div 
                  className="funnel-bar" 
                  style={{ width: `${(step.value / arr[0].value) * 100}%`, minWidth: '60px' }}
                >
                  {formatNumber(step.value)}
                </div>
                {index < arr.length - 1 && (
                  <span className="funnel-rate">
                    {((arr[index + 1].value / step.value) * 100).toFixed(1)}%
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Channel Comparison */}
      <div className="card">
        <SectionHeader icon="⚡" title="Channel Comparison" subtitle="Performance metrics by channel" />
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.paidMedia.channels} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis type="number" tick={{ fill: '#888' }} />
            <YAxis dataKey="name" type="category" tick={{ fill: '#888' }} width={100} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="leads" name="Leads" fill={COLORS.primary} />
            <Bar dataKey="conversions" name="Conversions" fill={COLORS.secondary} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// ============ PAID MEDIA TAB ============
const PaidMediaTab = ({ data }) => {
  const [channelFilter, setChannelFilter] = useState('all');
  
  const filteredCampaigns = channelFilter === 'all' 
    ? data.paidMedia.campaigns 
    : data.paidMedia.campaigns.filter(c => c.channel.toLowerCase().includes(channelFilter));

  const filteredChannels = channelFilter === 'all'
    ? data.paidMedia.channels
    : data.paidMedia.channels.filter(c => c.name.toLowerCase().includes(channelFilter));

  const kpis = channelFilter === 'all' ? data.paidMedia.kpis : {
    spend: filteredChannels.reduce((sum, c) => sum + c.spend, 0),
    impressions: filteredChannels.reduce((sum, c) => sum + c.impressions, 0),
    clicks: filteredChannels.reduce((sum, c) => sum + c.clicks, 0),
    conversions: filteredChannels.reduce((sum, c) => sum + c.conversions, 0),
    revenue: filteredChannels.reduce((sum, c) => sum + c.revenue, 0),
    ctr: filteredChannels.length > 0 ? (filteredChannels.reduce((sum, c) => sum + c.ctr, 0) / filteredChannels.length).toFixed(1) : 0,
    cpc: filteredChannels.length > 0 ? (filteredChannels.reduce((sum, c) => sum + c.cpc, 0) / filteredChannels.length).toFixed(2) : 0,
    roas: filteredChannels.length > 0 ? (filteredChannels.reduce((sum, c) => sum + c.roas, 0) / filteredChannels.length).toFixed(1) : 0
  };

  return (
    <div className="tab-content">
      {/* Channel Filter */}
      <div className="filter-bar">
        <span className="filter-label">Filter by Channel:</span>
        {['all', 'facebook', 'google', 'youtube', 'display'].map(channel => (
          <button
            key={channel}
            className={`filter-chip ${channelFilter === channel ? 'active' : ''}`}
            onClick={() => setChannelFilter(channel)}
          >
            {channel === 'all' ? 'All Channels' : channel.charAt(0).toUpperCase() + channel.slice(1)}
          </button>
        ))}
      </div>

      {/* Paid Media KPIs */}
      <div className="kpi-grid-6">
        <KPICard label="Spend" value={kpis.spend} prefix="$" />
        <KPICard label="Impressions" value={kpis.impressions} />
        <KPICard label="Clicks" value={kpis.clicks} />
        <KPICard label="CTR" value={kpis.ctr} suffix="%" />
        <KPICard label="CPC" value={kpis.cpc} prefix="$" />
        <KPICard label="ROAS" value={kpis.roas} suffix="x" />
      </div>

      {/* Charts Row */}
      <div className="grid-2">
        <div className="card">
          <SectionHeader icon="🎯" title="Campaign Objectives" subtitle="Spend by objective" />
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={data.paidMedia.objectives}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="spend"
                label={({ name, percentage }) => `${name} (${percentage}%)`}
              >
                {data.paidMedia.objectives.map((entry, index) => (
                  <Cell key={index} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => formatCurrency(value)} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <SectionHeader icon="📊" title="Daily Performance" subtitle="Conversions trend" />
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data.paidMedia.dailyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="date" tick={{ fill: '#888', fontSize: 11 }} />
              <YAxis tick={{ fill: '#888' }} />
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="conversions" name="Conversions" stroke={COLORS.primary} strokeWidth={2} dot={{ fill: COLORS.primary, r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Demographics */}
      <div className="grid-3">
        <div className="card">
          <SectionHeader icon="👤" title="Age Distribution" />
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={data.paidMedia.demographics.age}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={70}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {data.paidMedia.demographics.age.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <SectionHeader icon="📱" title="Device Split" />
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={data.paidMedia.demographics.device}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={70}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {data.paidMedia.demographics.device.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <SectionHeader icon="⚧" title="Gender Split" />
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={data.paidMedia.demographics.gender}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={70}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {data.paidMedia.demographics.gender.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Campaign Table */}
      <div className="card">
        <SectionHeader icon="📋" title="Campaign Breakdown" subtitle="Click headers to sort" />
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Campaign</th>
                <th>Objective</th>
                <th>Channel</th>
                <th>Status</th>
                <th>Spend</th>
                <th>Impressions</th>
                <th>Clicks</th>
                <th>CTR</th>
                <th>Conv.</th>
                <th>ROAS</th>
              </tr>
            </thead>
            <tbody>
              {filteredCampaigns.map((campaign, index) => (
                <tr key={index}>
                  <td>{campaign.name}</td>
                  <td><span className="badge">{campaign.objective}</span></td>
                  <td>{campaign.channel}</td>
                  <td>
                    <span className={`status-dot ${campaign.status.toLowerCase()}`}></span>
                    {campaign.status}
                  </td>
                  <td>{formatCurrency(campaign.spend)}</td>
                  <td>{formatNumber(campaign.impressions)}</td>
                  <td>{formatNumber(campaign.clicks)}</td>
                  <td>{campaign.ctr}%</td>
                  <td>{campaign.conversions}</td>
                  <td style={{ color: campaign.roas >= 5 ? COLORS.primary : COLORS.accent }}>{campaign.roas}x</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Creatives */}
      <div className="card">
        <SectionHeader icon="🎨" title="Top Ad Creatives" subtitle="Best performing ads" />
        <div className="creatives-grid">
          {data.paidMedia.topCreatives.map((creative, index) => (
            <div key={index} className="creative-card">
              <div className="creative-type">{creative.type}</div>
              <div className="creative-name">{creative.name}</div>
              <div className="creative-stats">
                <div><span>Impressions:</span> {formatNumber(creative.impressions)}</div>
                <div><span>Clicks:</span> {formatNumber(creative.clicks)}</div>
                <div><span>CTR:</span> {creative.ctr}%</div>
                <div><span>Conversions:</span> {creative.conversions}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============ SEO TAB ============
const SEOTab = ({ data }) => {
  const seo = data.seo;

  return (
    <div className="tab-content">
      {/* SEO KPIs */}
      <div className="kpi-grid-6">
        <KPICard label="Organic Sessions" value={seo.kpis.organicSessions} trend={seo.kpis.sessionsTrend} />
        <KPICard label="Organic Leads" value={seo.kpis.organicLeads} trend={seo.kpis.leadsTrend} />
        <KPICard label="Avg. Position" value={seo.kpis.avgPosition} trend={seo.kpis.positionTrend} />
        <KPICard label="Domain Authority" value={seo.kpis.domainAuthority} trend={seo.kpis.daTrend} />
        <KPICard label="Keywords Top 10" value={seo.kpis.keywordsTop10} />
        <KPICard label="Bounce Rate" value={seo.kpis.bounceRate} suffix="%" />
      </div>

      {/* Organic Traffic Trend */}
      <div className="card">
        <SectionHeader icon="📈" title="Organic Traffic Trend" subtitle="Sessions and conversions over time" />
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={seo.trafficTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="date" tick={{ fill: '#888' }} />
            <YAxis yAxisId="left" tick={{ fill: '#888' }} />
            <YAxis yAxisId="right" orientation="right" tick={{ fill: '#888' }} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Area yAxisId="left" type="monotone" dataKey="sessions" name="Sessions" fill="rgba(0,255,170,0.2)" stroke={COLORS.primary} />
            <Line yAxisId="right" type="monotone" dataKey="conversions" name="Conversions" stroke={COLORS.secondary} strokeWidth={2} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Keyword Rankings Table */}
      <div className="card">
        <SectionHeader icon="🔑" title="Keyword Rankings" subtitle="Top performing keywords" />
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Keyword</th>
                <th>Position</th>
                <th>Change</th>
                <th>Search Volume</th>
                <th>Traffic</th>
                <th>Difficulty</th>
                <th>URL</th>
              </tr>
            </thead>
            <tbody>
              {seo.keywords.map((kw, index) => (
                <tr key={index}>
                  <td className="keyword-cell">{kw.keyword}</td>
                  <td>
                    <span className={`position-badge ${kw.position <= 3 ? 'top3' : kw.position <= 10 ? 'top10' : ''}`}>
                      {kw.position}
                    </span>
                  </td>
                  <td className={kw.change > 0 ? 'positive' : kw.change < 0 ? 'negative' : ''}>
                    {kw.change > 0 ? '↑' : kw.change < 0 ? '↓' : '−'} {Math.abs(kw.change)}
                  </td>
                  <td>{formatNumber(kw.volume)}</td>
                  <td>{formatNumber(kw.traffic)}</td>
                  <td>
                    <div className="difficulty-bar">
                      <div className="difficulty-fill" style={{ width: `${kw.difficulty}%`, backgroundColor: kw.difficulty > 70 ? COLORS.danger : kw.difficulty > 50 ? COLORS.accent : COLORS.primary }}></div>
                      <span>{kw.difficulty}</span>
                    </div>
                  </td>
                  <td className="url-cell">{kw.url}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Pages & Technical */}
      <div className="grid-2">
        <div className="card">
          <SectionHeader icon="📄" title="Top Landing Pages" subtitle="By organic traffic" />
          <table className="data-table">
            <thead>
              <tr>
                <th>Page</th>
                <th>Sessions</th>
                <th>Bounce</th>
                <th>Conv.</th>
              </tr>
            </thead>
            <tbody>
              {seo.topPages.map((page, index) => (
                <tr key={index}>
                  <td className="url-cell">{page.page}</td>
                  <td>{formatNumber(page.sessions)}</td>
                  <td>{page.bounceRate}%</td>
                  <td>{page.conversions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card">
          <SectionHeader icon="⚙️" title="Technical SEO" subtitle="Site health metrics" />
          <div className="tech-seo-grid">
            <div className="tech-metric">
              <div className="tech-label">Page Speed (Mobile)</div>
              <div className="tech-value" style={{ color: seo.technicalScores.pageSpeed.mobile >= 70 ? COLORS.primary : COLORS.accent }}>
                {seo.technicalScores.pageSpeed.mobile}/100
              </div>
            </div>
            <div className="tech-metric">
              <div className="tech-label">Page Speed (Desktop)</div>
              <div className="tech-value" style={{ color: seo.technicalScores.pageSpeed.desktop >= 70 ? COLORS.primary : COLORS.accent }}>
                {seo.technicalScores.pageSpeed.desktop}/100
              </div>
            </div>
            <div className="tech-metric">
              <div className="tech-label">Mobile Usability</div>
              <div className="tech-value" style={{ color: COLORS.primary }}>
                {seo.technicalScores.mobileUsability}%
              </div>
            </div>
            <div className="tech-metric">
              <div className="tech-label">Indexed Pages</div>
              <div className="tech-value">{formatNumber(seo.technicalScores.indexedPages)}</div>
            </div>
            <div className="tech-metric">
              <div className="tech-label">LCP</div>
              <div className="tech-value" style={{ color: seo.technicalScores.coreWebVitals.lcp <= 2.5 ? COLORS.primary : COLORS.accent }}>
                {seo.technicalScores.coreWebVitals.lcp}s
              </div>
            </div>
            <div className="tech-metric">
              <div className="tech-label">Crawl Errors</div>
              <div className="tech-value" style={{ color: seo.technicalScores.crawlErrors > 20 ? COLORS.danger : COLORS.primary }}>
                {seo.technicalScores.crawlErrors}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============ SOCIAL TAB ============
const SocialTab = ({ data }) => {
  const social = data.social;

  return (
    <div className="tab-content">
      {/* Social KPIs */}
      <div className="kpi-grid-6">
        <KPICard label="Total Followers" value={social.kpis.totalFollowers} trend={social.kpis.followersTrend} />
        <KPICard label="Follower Growth" value={social.kpis.followerGrowth} prefix="+" />
        <KPICard label="Engagement Rate" value={social.kpis.engagementRate} suffix="%" trend={social.kpis.engagementTrend} />
        <KPICard label="Total Reach" value={social.kpis.totalReach} trend={social.kpis.reachTrend} />
        <KPICard label="Video Views" value={social.kpis.videoViews} />
        <KPICard label="Shares" value={social.kpis.shares} />
      </div>

      {/* Platform Breakdown */}
      <div className="grid-2">
        <div className="card">
          <SectionHeader icon="📱" title="Platform Performance" subtitle="By followers and engagement" />
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={social.platforms}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="name" tick={{ fill: '#888' }} />
              <YAxis tick={{ fill: '#888' }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="followers" name="Followers" fill={COLORS.primary} />
              <Bar dataKey="reach" name="Reach" fill={COLORS.secondary} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <SectionHeader icon="📈" title="Follower Growth" subtitle="Monthly trend by platform" />
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={social.followerTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="date" tick={{ fill: '#888' }} />
              <YAxis tick={{ fill: '#888' }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line type="monotone" dataKey="instagram" name="Instagram" stroke="#E1306C" strokeWidth={2} />
              <Line type="monotone" dataKey="facebook" name="Facebook" stroke="#4267B2" strokeWidth={2} />
              <Line type="monotone" dataKey="linkedin" name="LinkedIn" stroke="#0077B5" strokeWidth={2} />
              <Line type="monotone" dataKey="youtube" name="YouTube" stroke="#FF0000" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Posts */}
      <div className="card">
        <SectionHeader icon="🏆" title="Top Performing Posts" subtitle="Highest engagement content" />
        <div className="posts-grid">
          {social.topPosts.map((post, index) => (
            <div key={index} className="post-card">
              <div className="post-platform">{post.platform}</div>
              <div className="post-type">{post.type}</div>
              <div className="post-content">{post.content}</div>
              <div className="post-stats">
                <div><span>Reach:</span> {formatNumber(post.reach)}</div>
                <div><span>Engagement:</span> {formatNumber(post.engagement)}</div>
                <div><span>Shares:</span> {formatNumber(post.shares)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Type Performance */}
      <div className="grid-2">
        <div className="card">
          <SectionHeader icon="🎬" title="Content Type Performance" subtitle="Avg engagement by format" />
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={social.contentTypes} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis type="number" tick={{ fill: '#888' }} />
              <YAxis dataKey="type" type="category" tick={{ fill: '#888' }} width={80} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="avgEngagement" name="Avg Engagement %" fill={COLORS.primary} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <SectionHeader icon="📊" title="Platform Stats" subtitle="Detailed breakdown" />
          <table className="data-table">
            <thead>
              <tr>
                <th>Platform</th>
                <th>Followers</th>
                <th>Engagement</th>
                <th>Posts</th>
              </tr>
            </thead>
            <tbody>
              {social.platforms.map((platform, index) => (
                <tr key={index}>
                  <td>{platform.name}</td>
                  <td>{formatNumber(platform.followers)}</td>
                  <td>{platform.engagement}%</td>
                  <td>{platform.posts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// ============ AI INSIGHTS COMPONENT ============
const AIInsights = ({ clientName }) => {
  const [insights, setInsights] = useState([
    { type: 'loading', text: 'AI insights will appear here when connected to ChatGPT API...' }
  ]);

  // Placeholder - will be replaced with actual API call
  const staticInsights = {
    apex_university: [
      { type: 'Opportunity', text: 'Facebook Ads outperforming Google Ads by 23% on ROAS. Consider reallocating 15% of Google budget to Facebook for the MBA campaign.' },
      { type: 'Warning', text: 'Weekend spend efficiency drops by 35%. Pause campaigns Saturday-Sunday and redistribute budget to Monday-Thursday for better ROI.' },
      { type: 'Trend', text: '18-24 age group shows highest conversion rate (6.8%). Consider creating more Gen-Z targeted creative content with short-form video.' }
    ],
    drivemax_motors: [
      { type: 'Opportunity', text: 'Retargeting campaigns showing 6.8x ROAS — highest among all channels. Increase retargeting budget by 25% for immediate gains.' },
      { type: 'Warning', text: 'Display ads have lowest conversion rate (3.4%). Consider pausing underperforming placements and focusing on high-intent Google Search.' },
      { type: 'Trend', text: '35-44 age group generates 45% of test drive bookings. Tailor SUV creative specifically for family-oriented messaging.' }
    ],
    medcare_clinics: [
      { type: 'Opportunity', text: 'Email campaigns showing 5.8x ROAS with lowest CPC ($1.45). Expand email list and increase send frequency for appointment reminders.' },
      { type: 'Warning', text: 'Facebook Ads underperforming with 3.4x ROAS. Healthcare audiences respond better to search intent — shift budget to Google Ads.' },
      { type: 'Trend', text: '72% of bookings come from mobile. Ensure landing pages are mobile-optimized and click-to-call is prominently featured.' }
    ]
  };

  useEffect(() => {
    setInsights(staticInsights[clientName] || []);
  }, [clientName]);

  return (
    <div className="ai-insights">
      <div className="ai-header">
        <span className="ai-icon">🤖</span>
        <span className="ai-title">AI-Powered Insights</span>
        <span className="ai-badge">GPT-4</span>
      </div>
      <div className="ai-content">
        {insights.map((insight, index) => (
          <div key={index} className={`ai-insight ${insight.type.toLowerCase()}`}>
            <div className="insight-type">{insight.type}</div>
            <div className="insight-text">{insight.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============ MAIN DASHBOARD COMPONENT ============
const MarketingDashboard = () => {
  const [selectedClient, setSelectedClient] = useState('apex_university');
  const [activeTab, setActiveTab] = useState('overview');
  const [dateRange, setDateRange] = useState('30days');

  // Get raw data and scale based on date range
  const rawData = DASHBOARD_DATA[selectedClient];
  const data = useMemo(() => scaleData(rawData, dateRange), [selectedClient, dateRange]);

  const handleExport = () => {
    const csvContent = [
      ['Campaign', 'Objective', 'Channel', 'Status', 'Spend', 'Impressions', 'Clicks', 'Conversions', 'ROAS'],
      ...data.paidMedia.campaigns.map(c => [c.name, c.objective, c.channel, c.status, c.spend, c.impressions, c.clicks, c.conversions, c.roas])
    ].map(row => row.join(',')).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${data.name.replace(/\s+/g, '_')}_${dateRange}_campaigns.csv`;
    a.click();
  };

  const getDateRangeLabel = () => {
    switch(dateRange) {
      case '7days': return 'Last 7 Days';
      case '30days': return 'Last 30 Days';
      case '90days': return 'Last 90 Days';
      default: return 'Last 30 Days';
    }
  };

  return (
    <div className="dashboard-wrapper">
      {/* Disclaimer Banner */}
      <div className="disclaimer-banner">
        <span className="disclaimer-icon">ℹ️</span>
        <span><strong>Portfolio Demo:</strong> This dashboard uses synthetic data to demonstrate analytics capabilities. Built with React, Recharts, and simulated ETL pipeline.</span>
      </div>

      {/* Header */}
      <div className="dashboard-header">
        <div className="header-left">
          <h1 className="dashboard-title">{data.logo} {data.name}</h1>
          <p className="dashboard-subtitle">{data.description} • <strong style={{color: '#00ffaa'}}>{getDateRangeLabel()}</strong></p>
        </div>
        <div className="header-right">
          <select 
            className="header-select"
            value={selectedClient}
            onChange={(e) => setSelectedClient(e.target.value)}
          >
            <option value="apex_university">🎓 Apex University</option>
            <option value="drivemax_motors">🚗 DriveMax Motors</option>
            <option value="medcare_clinics">🏥 MedCare Clinics</option>
          </select>
          <select 
            className="header-select"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option value="7days">Last 7 Days</option>
            <option value="30days">Last 30 Days</option>
            <option value="90days">Last 90 Days</option>
          </select>
          <button className="export-btn" onClick={handleExport}>
            📥 Export
          </button>
        </div>
      </div>

      {/* Overall KPIs */}
      <div className="overall-kpis">
        <KPICard label="Total Spend" value={data.overall.totalSpend} trend={data.overall.spendTrend} prefix="$" />
        <KPICard label="Total Revenue" value={data.overall.totalRevenue} trend={data.overall.revenueTrend} prefix="$" />
        <KPICard label="Overall ROAS" value={data.overall.overallROAS} trend={data.overall.roasTrend} suffix="x" />
        <KPICard label="Total Leads" value={data.overall.totalLeads} trend={data.overall.leadsTrend} />
        <KPICard label="Impressions" value={data.overall.totalImpressions} trend={data.overall.impressionsTrend} />
        <KPICard label="Clicks" value={data.overall.totalClicks} trend={data.overall.clicksTrend} />
      </div>

      {/* Tabs */}
      <div className="tab-container">
        <TabButton active={activeTab === 'overview'} onClick={() => setActiveTab('overview')} icon="📊">Overview</TabButton>
        <TabButton active={activeTab === 'paidmedia'} onClick={() => setActiveTab('paidmedia')} icon="💰">Paid Media</TabButton>
        <TabButton active={activeTab === 'seo'} onClick={() => setActiveTab('seo')} icon="🔍">SEO</TabButton>
        <TabButton active={activeTab === 'social'} onClick={() => setActiveTab('social')} icon="📱">Social</TabButton>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && <OverviewTab data={data} />}
      {activeTab === 'paidmedia' && <PaidMediaTab data={data} />}
      {activeTab === 'seo' && <SEOTab data={data} />}
      {activeTab === 'social' && <SocialTab data={data} />}

      {/* AI Insights */}
      <AIInsights clientName={selectedClient} />

      {/* Footer */}
      <div className="dashboard-footer">
        <div className="footer-content">
          <div className="pipeline-info">
            <span className="pipeline-icon">⚡</span>
            <span><strong>Data Pipeline:</strong> ETL from 3 sources (Ads APIs, GA4, Social) → Data Warehouse → Dashboard</span>
          </div>
          <div className="footer-disclaimer">
            Built by Vidur Sharma | React + Recharts | Synthetic data for demonstration
          </div>
        </div>
      </div>
    </div>
  );
};

// Render
const container = document.getElementById('marketing-dashboard');
const root = ReactDOM.createRoot(container);
root.render(<MarketingDashboard />);