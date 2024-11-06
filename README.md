# SonarLink: A Decentralized Music Platform on the Blockchain

SonarLink is a decentralized music platform built on the Ethereum blockchain, empowering artists and fans.  It uses NFTs to represent songs, enabling secure ownership, transparent royalties, and a marketplace for music and related assets.  The platform includes features for playlists, premium subscriptions, live event ticketing, and social interaction.  A user-friendly frontend interface enhances the user experience.


## Core Features:

* **NFT Music Representation:** Songs are tokenized as NFTs, providing artists with verifiable ownership and enabling fractional ownership or licensing.
* **Transparent Royalties:** Royalty payments are automatically distributed to artists upon song purchases and plays, ensuring fair compensation.  A percentage of each transaction is directed to the platform.
* **Premium Subscription Model:** Users can subscribe for ad-free music streaming and access to exclusive content.
* **Playlist Creation & Management:** Users can create and manage personal playlists.
* **Music Licensing:** Artists can offer various licenses for their music, generating additional revenue.
* **Live Event Ticketing:** Facilitates the sale of tickets for live music events, directly linking to artists' earnings.
* **Social Features:** Includes following/unfollowing artists and commenting on songs.
* **Copyright Registration:** Allows for the registration and sale of song copyrights.
* **Decentralized Governance:** Contract ownership is transferable, offering control over key parameters.
* **Pausable:** The contract can be paused in case of emergency.
* **Frontend Interface:** A React-based frontend simplifies interaction with the smart contracts.


## Smart Contract Functionality (`SonarLink.sol`):

The core functionality is managed by the `SonarLink.sol` contract, including:

* **Song Registration & Management:**  Allows artists (initially only the contract owner) to register songs as NFTs, setting metadata and price.
* **Song Purchase & Royalties:**  Handles song purchases, automatically distributing royalties to artists and commissions to the platform.
* **Song Playback:** Enables song playback with ad-free access for premium subscribers.
* **Premium Subscriptions:** Allows users to purchase premium subscriptions.
* **Playlist Management:** Enables playlist creation, song addition, and removal.
* **Music Licensing:** Allows artists to create and sell licenses for their songs.
* **Live Event Ticketing:** Manages the creation, cancellation, and purchasing of tickets for live events.
* **Social Interaction:** Handles following/unfollowing artists and commenting on songs.
* **Copyright Registration & Sale:**  Allows copyright registration and sale of those rights.
* **Funds Withdrawal:** Allows the contract owner to withdraw platform earnings.
* **Contract Pause/Unpause:**  Provides a pause mechanism for emergency situations.


## Frontend Interface (`sonarlink-frontend`):

The project includes a frontend application built with React, Bootstrap, and Web3.js.  This interface simplifies user interaction with the SonarLink smart contracts, providing a more user-friendly experience for both artists and listeners.  The frontend uses `react-router-dom` for navigation and `react-bootstrap` for UI components.


## Deployment and Usage:

**1. Smart Contract Deployment:**

* **Prerequisites:** Solidity development environment (Remix, Hardhat, Truffle), Ethereum network (mainnet or testnet), and the address of an ERC-20 token (e.g., WETH).
* **Compilation:** Compile the `SonarLink.sol` contract.
* **Deployment:** Deploy the contract, providing the ERC-20 token address.


**2. Frontend Deployment:**

The frontend is a standard React application. You can use `npm start` to run it locally after installing the necessary dependencies (`npm install`).  Deployment would involve building the application (`npm run build`) and deploying the static files to a web server.


**3. Interaction:**

Users interact with the platform through the frontend application, which handles the communication with the deployed smart contracts.


**4. Considerations:**

* Initial song registration is limited to the contract owner; consider mechanisms for onboarding new artists.
* Off-chain storage (like IPFS) is highly recommended for storing large song files and artwork.  The contract currently doesn't directly integrate with IPFS.
* Further development could include more advanced social features, user profiles, and improved UI/UX.
* Security audits are essential before deploying to mainnet.


## Requirements:

* **Smart Contract:** Solidity development environment (Remix, Hardhat, Truffle).
* **Frontend:** Node.js, npm.
* Ethereum network (mainnet or testnet).
* An ERC-20 token for transactions.


## License:

MIT License


## Contributions:

Contributions are welcome! Please open an issue or submit a pull request. 
