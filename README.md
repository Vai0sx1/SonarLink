# SonarLink: A Decentralized Music Platform

SonarLink is a decentralized music platform built on the Ethereum blockchain, empowering artists and fans. It utilizes NFTs for songs, enabling secure ownership, transparent royalties, and a marketplace for music and related assets.  The platform offers features for playlists, premium subscriptions, live event ticketing, and social interaction, all enhanced by a dedicated React frontend.

## Core Features:

* **NFT-based Music Ownership:** Songs are tokenized as NFTs, granting artists verifiable ownership and control. This facilitates fractional ownership and licensing opportunities.
* **Transparent Royalties:** Automated royalty payments are distributed to artists upon song purchases and plays, ensuring fair compensation.  The platform also receives a commission on each transaction.
* **Premium Subscriptions:** Users can subscribe for an ad-free listening experience and exclusive content.
* **Playlists:** Users can curate personalized playlists.
* **Music Licensing:** Artists can offer various licenses for their music, creating additional revenue streams.
* **Live Event Ticketing:**  The platform facilitates ticket sales for live music events, directly benefiting artists.
* **Social Features:** Follow/unfollow artists, comment on songs, and engage with the community.
* **Copyright Registration:**  Register and manage song copyrights on-chain.
* **Decentralized Governance:** Contract ownership is transferable, offering control over key parameters.
* **Pausable:**  An emergency pause mechanism provides security in unforeseen circumstances.
* **React Frontend:**  A dedicated React frontend simplifies user interaction with the platform and its features.

## Smart Contract Functionality (`SonarLink.sol`):

* **`registerSong(...)`:**  Registers a new song as an NFT (owner-only initially).
* **`purchaseSong(...)`:** Enables users to purchase songs, automatically distributing royalties and commissions.
* **`playSong(...)`:** Allows song playback, with ad-free access for premium subscribers.
* **`purchasePremiumSubscription(...)`:** Manages premium subscription purchases.
* **`createPlaylist(...)`, `addSongToPlaylist(...)`, `removeSongFromPlaylist(...)`:**  Handles playlist creation and management.
* **`addLicenseToSong(...)`, `purchaseLicense(...)`:** Allows artists to add and sell licenses for their music.
* **`registerCopyright(...)`, `purchaseCopyright(...)`:**  Manages copyright registration and sales.
* **`createLiveEvent(...)`, `cancelLiveEvent(...)`, `purchaseLiveEventTicket(...)`:** Facilitates live event ticketing.
* **`followUser(...)`, `unfollowUser(...)`:** Implements social following/unfollowing functionality.
* **`rateSong(...)`, `commentSong(...)`:** Allows users to rate and comment on songs.
* **`withdraw()`:** Allows the contract owner to withdraw platform earnings.
* **`pause()`, `unpause()`:**  Pauses and resumes contract functionality.
* **`getSongInfo(...)`:** Retrieves song metadata.


## Frontend (`sonarlink-frontend`):

The React frontend enhances user experience and streamlines interaction with the smart contracts.  It uses `react-app-rewired` for customization, `react-router-dom` for navigation, and `bootstrap` for styling.  Web3 integration is handled via `web3`.  Testing is supported with `@testing-library/`.

**Key Dependencies:**

* **`react`, `react-dom`, `react-scripts`:** Core React libraries.
* **`react-bootstrap`:** Styling and UI components.
* **`react-router-dom`:**  Navigation.
* **`web3`:**  Web3.js library for blockchain interaction.
* **`@testing-library/*`:**  Testing utilities.
* **`react-app-rewired`:** Build process customization.


## Deployment and Usage:

**1. Smart Contract Deployment:**

* **Environment:** Remix, Hardhat, or Truffle.
* **Network:** Ethereum (mainnet or testnet).
* **Compile & Deploy:** Compile `SonarLink.sol` and deploy, providing the ERC-20 token address used for transactions.


**2. Frontend Deployment:**

* **Prerequisites:** Node.js, npm/yarn.
* **Installation:** `npm install` or `yarn install` within the `sonarlink-frontend` directory.
* **Development:** `npm start` or `yarn start`.
* **Production Build:** `npm run build` or `yarn build`. Deploy the resulting `build` directory to a web server.


**3. Usage:**

Users interact with the platform through the frontend interface, connecting their wallets (e.g., Metamask) to access features like purchasing songs, creating playlists, subscribing to premium content, and interacting with artists.


## Requirements:

* **Smart Contract:** Solidity development environment, Ethereum network.
* **Frontend:** Node.js, npm/yarn, web browser, Metamask (or other Web3 wallet).


## License:

MIT License


## Contributions:

Contributions are welcome! Open an issue or submit a pull request on GitHub.  
