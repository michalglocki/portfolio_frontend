import React from "react";

const ExternalComponent = ({ externalData }) => {
  return (
    <div>
      <div>user: {externalData.username}</div>
      <div>honor value: {externalData.honor}</div>
      <div>kata level: {externalData.ranks.overall.name}</div>
      <div>kata belt: {externalData.ranks.overall.color}</div>
      <div>Clan: {externalData.clan}</div>
      <div>completed kata: {externalData.codeChallenges.totalCompleted}</div>
    </div>
  );
};

export default ExternalComponent;
