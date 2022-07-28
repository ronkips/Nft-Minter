import { useEffect, useState } from "react";
import { connectWallet, getCurrentWalletConnected, } from "./utils/interact";



const Minter = (props) => {

  //State variables
  const [walletAddress, setWallet] = useState(""); //walletAddress stores user's wallet address
  const [status, setStatus] = useState(""); // status is a string that contains the message to display at the bottom of the UI
  const [name, setName] = useState(""); //name is the string that stores the NFT'S name
  const [description, setDescription] = useState(""); //description stores the NFT's description.
  const [url, setURL] = useState(""); // url is the ling to the NFT's digital asset
 
  useEffect(() => { //TODO: implement
    async function Main (){
      const {address, status} = await getCurrentWalletConnected();
      setWallet(address);
      setStatus(status);


    }
    Main();
  }, []);

  const connectWalletPressed = async () => { // this function will be called to called to connect the user's Metamask wallet
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
   
  };

  const onMintPressed = async () => { //This function is called to mint the user's NFT
    
  };

  return (
    <div className="Minter">
      <button id="walletButton" onClick={connectWalletPressed}>
        {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
      </button>


      <br></br>
      <h1 id="title">🧙‍♂️ Alchemy NFT-Minter</h1>
     
      <p>
        Please add your asset's link, name, and description, then press <b>"Mint."</b>
      </p>
      <form>
        <h2>🖼 Link to asset: </h2>
        <input
          type="text"
          placeholder="e.g. https://gateway.pinata.cloud/ipfs/<hash>"
          onChange={(event) => setURL(event.target.value)}
        />
        <h2>🤔 Name: </h2>
        <input
          type="text"
          placeholder="e.g. My first NFT!"
          onChange={(event) => setName(event.target.value)}
        />
        <h2>✍️ Description: </h2>
        <input
          type="text"
          placeholder="e.g. Even cooler than cryptokitties ;)"
          onChange={(event) => setDescription(event.target.value)}
        />
      </form>
      <button id="mintButton" onClick={onMintPressed}>
        Mint NFT
      </button>
      <p id="status">
        {status}
        
      </p>
    </div>
  );
};

export default Minter;
