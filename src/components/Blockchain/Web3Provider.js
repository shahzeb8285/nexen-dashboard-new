
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import MLM from "../../contracts/MLM.json";
import Web3 from "web3";
import { incomeFetched, userFetched } from "../../actions/web3Actions";
import { toast } from 'react-toastify';


class Web3Provider extends React.Component {


  constructor(props) {
    super(props);




    this.state = {
      user: {},
      income: {},
      mlm: null
    };
  }


  async componentDidMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
    await this.initUser(1)




  }



  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }


  async loadBlockchainData() {

    try {

      const web3 = window.web3;
      const accounts = await web3.eth.getAccounts();
      const walletAddress = accounts[0];
      const networkId = await web3.eth.net.getId();
      const networkData = MLM.networks[networkId];
      if (networkData) {
        const mlm = new web3.eth.Contract(MLM.abi, networkData.address);
        const contractAddress = networkData.address;
        // this.data.totalUsers = web3.utils.toBN(await mlm.methods.getTotalUsers().call()).toString();
        // this.data.rewardWallet = web3.utils.fromWei(web3.utils.toBN(await mlm.methods.getRewardWallet().call()), "ether");
        // this.data.totalAmountWithdrawn = web3.utils.fromWei(web3.utils.toBN(await mlm.methods.getTotalAmountWithdrawn().call()), "ether");

        this.setState({ mlm, contractAddress, walletAddress });
        // this.setState({
        //     contractAddress: networkData.address,
        //     totalUsers: web3.utils.toBN(await mlm.methods.getTotalUsers().call()).toString(),
        //     rewardWallet: web3.utils.fromWei(web3.utils.toBN(await mlm.methods.getRewardWallet().call()), "ether"),
        //     totalAmountWithdrawn: web3.utils.fromWei(web3.utils.toBN(await mlm.methods.getTotalAmountWithdrawn().call()), "ether"),
        // });

      } else {
        // window.alert(
        //   "MLM contract not deployed to detected network."
        // );

        this.makeErrorToast("MLM contract not deployed to detected network.")
      }
    }
    catch (e) {
      console.log(e);
      console.log("you have an error");
    }
  }




  async  initUser(referalId) {
    console.log("initUser")
    if (!this.state.mlm) {
      return
    }


    console.log("initUser","Gggg")

    const web3 = window.web3;
    const mlm = this.state.mlm;
    console.log("mlmmmm",mlm)
    mlm.methods.getUserInfo(referalId).call().then((User) => {

      mlm.methods.getUsersIncomes(referalId).call().then((income) => {
        var user = {}
        user = {
          inviter: User[0],
          totalReferrals: User[1],
          dailyReferrals: User[2],
          levelsPurchased: User[3],
          walletAddress: this.state.walletAddress,
          contractAddress: this.state.contractAddress
        }

        var di = income.directIncome;
        var ri = income.recycleIncome;
        var li = income.levelIncome;
        // var rewi = user.rewardIncome;
        var rf = income.recycleFund;
        // var lf = user.levelFund;
        var income = {

          directIncome: web3.utils.fromWei(di.toString(), "ether"),
          recycleIncome: web3.utils.fromWei(ri.toString(), "ether"),
          levelIncome: web3.utils.fromWei(li.toString(), "ether"),
          // rewardIncome : web3.utils.fromWei(rewi.toString(),"ether"),
          recycleFund: web3.utils.fromWei(rf.toString(), "ether"),
          // levelFund: web3.utils.fromWei(lf.toString(),"ether")
        };

        user.income = income;
        console.log("=======================", user)
        this.setState({ user })

      })
        .catch(function (err) {
          console.error("problem getting user", err);
        });

    })
      .catch(function (err) {
        console.error("problem getting user", err);
      });


  }







  async register(id, price, callback) {
    // this.setState({ loading: true });
    this.data.mlm.methods.register(id).send({ from: this.data.account, value: price })
      .once('receipt', (receipt) => {
        callback(receipt)
        // this.setState({ loading: false })
      })
  }

  //Buy level
  async buyLevel(level, price, callback) {
    // this.setState({ loading: true });
    this.data.mlm.methods.buyLevel(level).send({ from: this.data.account, value: price })
      .once('receipt', (receipt) => {
        // this.setState({ loading: false })
        callback(receipt)
      })
  }

  //auto buylevel
  async autoBuyLevel(callback) {
    // this.setState({ loading: true });
    this.data.mlm.methods.autoBuyLevel().send({ from: this.data.account })
      .once('receipt', (receipt) => {
        // this.setState({ loading: false })
        callback(receipt)
      })
  }

  //withdraw autobuy level wallet
  async withDrawAutobuyWalletAmount(callback) {
    // this.setState({ loading: true });
    this.data.mlm.methods.withDrawAutobuyWalletAmount().send({ from: this.data.account })
      .once('receipt', (receipt) => {
        // this.setState({ loading: false })
        callback(receipt)

      })
  }

  //distribute rewards
  async giveRewards(callback) {
    // this.setState({ loading: true });
    this.data.mlm.methods.giveRewards().send({ from: this.data.account })
      .once('receipt', (receipt) => {
        // this.setState({ loading: false })
        callback(receipt)

      })
  }

  //retopup or recycle id
  async recycle(id1, id2, id3, callback) {
    // this.setState({ loading: true });
    this.data.mlm.methods.recycle(id1, id2, id3).send({ from: this.data.account })
      .once('receipt', (receipt) => {
        // this.setState({ loading: false })
        callback(receipt)

      })
  }






  makeErrorToast(error){
    toast.error( error, { 
      position:"bottom-center",
      autoClose: 7000, 
      hideProgressBar: true, 
      closeOnClick: false,
      pauseOnHover: true, 
      draggable: false 
     });
     
  }





  render() {
    return (

      <>

      </>
    );
  }
}

function mapStateToProps(store) {
  return {
    isSidebarOpened: store.navigation.sidebarOpened,
    sidebarVisibility: store.navigation.sidebarVisibility,
    sidebarPosition: store.navigation.sidebarPosition,
  };
}

export default (connect(mapStateToProps)(Web3Provider));

