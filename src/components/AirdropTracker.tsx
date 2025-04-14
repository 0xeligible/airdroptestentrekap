import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

type Testnet = {
  name: string;
  raised: string;
  tier: "Tier-S" | "Tier-A" | "Tier-B" | "Tier-C";
  priority: number;
  description: string;
};

const testnets: Testnet[] = [
  {
    name: "@monad_xyz",
    raised: "$244M",
    tier: "Tier-S",
    priority: 9,
    description: "High-performance L1 with full EVM compatibility and massive throughput"
  },
  {
    name: "@OG_labs",
    raised: "$365M",
    tier: "Tier-S",
    priority: 10,
    description: "Modular AI chain with scalable DA for high-demand AI workloads"
  },
  {
    name: "@SaharaLabsAI",
    raised: "$43M",
    tier: "Tier-A",
    priority: 9,
    description: "Decentralized AI platform focused on privacy and user data control"
  },
  {
    name: "@megaeth_labs",
    raised: "$47.8M",
    tier: "Tier-S",
    priority: 9,
    description: "Real-time blockchain processing 100k+ TPS with ms latency"
  },
  {
    name: "@Somnia_Network",
    raised: "$280M",
    tier: "Tier-A",
    priority: 8,
    description: "Scalable L1 with multithreaded consensus and low-cost infra"
  },
  {
    name: "@SuccinctLabs",
    raised: "$55M",
    tier: "Tier-B",
    priority: 6,
    description: "Ethereum infra enabling cross-chain access without native integration"
  },
  {
    name: "@yalaorg",
    raised: "$8M",
    tier: "Tier-B",
    priority: 7,
    description: "Modular infra bridging Bitcoin liquidity into DeFi protocols"
  },
  {
    name: "@Humanityprot",
    raised: "$30M",
    tier: "Tier-B",
    priority: 7,
    description: "Identity-first L1 for sybil-resistant authentication"
  },
  {
    name: "@NaorisProtocol",
    raised: "$11M",
    tier: "Tier-B",
    priority: 6,
    description: "Cybersecurity mesh network with AI-driven threat validation"
  },
  {
    name: "@reddio_com",
    raised: "TBA",
    tier: "Tier-C",
    priority: 5,
    description: "zkRollup-based L2 with SDK/API for deploying smart contracts"
  },
  {
    name: "@FractionAI_xyz",
    raised: "$6M",
    tier: "Tier-B",
    priority: 6,
    description: "No-code AI agent builder using natural language prompts"
  },
  {
    name: "@playsapien",
    raised: "$15.5M",
    tier: "Tier-C",
    priority: 5,
    description: "Knowledge protocol scaling human input for AI models"
  },
  {
    name: "@dangoXchg",
    raised: "$3.6M",
    tier: "Tier-B",
    priority: 7,
    description: "DeFi hub with leverage order books and next-gen UX"
  },
  {
    name: "@Seal",
    raised: "TBA",
    tier: "Tier-B",
    priority: 6,
    description: "On-chain security infra built by the Mysten Labs team"
  },
  {
    name: "@irys_xyz",
    raised: "$8.9M",
    tier: "Tier-B",
    priority: 6,
    description: "Active data storage layer enabling decentralized app integration"
  }
];

const getBadgeColor = (tier: Testnet["tier"]) => {
  switch (tier) {
    case "Tier-S": return "bg-green-600";
    case "Tier-A": return "bg-blue-500";
    case "Tier-B": return "bg-yellow-500";
    case "Tier-C": return "bg-orange-400";
    default: return "bg-gray-300";
  }
};

export default function AirdropTracker() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {testnets.map((testnet, index) => (
        <Card key={index} className="shadow-lg">
          <CardContent className="p-4 space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">{testnet.name}</h2>
              <Badge text={testnet.tier} color={getBadgeColor(testnet.tier)} />
            </div>
            <p className="text-sm text-gray-500">Raised: {testnet.raised}</p>
            <p className="text-sm text-gray-600">Priority: {testnet.priority}/10</p>
            <p className="text-sm">{testnet.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
