<<<<<<< HEAD
import db from '../Services/FirestoreConfig';

export const getBreakfast=(id)=>{
    let docRef=db.collection("breakfast");
    docRef.get().then((snapShots)=>{
    this.setState({
   items1:snapShots.docs.map(item=>{
   return alert(item.data().item);
  }) })})
  }
  
  export const getLunch=(id)=>{
    let docRef=db.collection("lunch");
        docRef.get().then((snapShots)=>{
        this.setState({
       items2:snapShots.docs.map(item=>{
       return alert(item.data().item);
  }) })})
  }

  export const getHamburger1=(id)=>{
    let docRef=db.collection("hamburger1");
        docRef.get().then((snapShots)=>{
        this.setState({
       items3:snapShots.docs.map(item=>{
       return alert(item.data().item);
  }) })})
  }

  export const getHamburger2=(id)=>{
    let docRef=db.collection("hamburdoble");
        docRef.get().then((snapShots)=>{
        this.setState({
       items4:snapShots.docs.map(item=>{
       return alert(item.data().item);
  }) })})
  }

  export const getExtra1=(id)=>{
    let docRef=db.collection("extra1");
        docRef.get().then((snapShots)=>{
        this.setState({
       items5:snapShots.docs.map(item=>{
       return alert(item.data().item);
  }) })})
  }

  export const getExtra2=(id)=>{
    let docRef=db.collection("extra2");
        docRef.get().then((snapShots)=>{
        this.setState({
       items5:snapShots.docs.map(item=>{
       return alert(item.data().item);
  }) })})
=======
import db from '../Services/FirestoreConfig';

export const getBreakfast=(id)=>{
    let docRef=db.collection("breakfast");
    docRef.get().then((snapShots)=>{
    this.setState({
   items1:snapShots.docs.map(item=>{
   return alert(item.data().item);
  }) })})
  }
  
  export const getLunch=(id)=>{
    let docRef=db.collection("lunch");
        docRef.get().then((snapShots)=>{
        this.setState({
       items2:snapShots.docs.map(item=>{
       return alert(item.data().item);
  }) })})
  }

  export const getHamburger1=(id)=>{
    let docRef=db.collection("hamburger1");
        docRef.get().then((snapShots)=>{
        this.setState({
       items3:snapShots.docs.map(item=>{
       return alert(item.data().item);
  }) })})
  }

  export const getHamburger2=(id)=>{
    let docRef=db.collection("hamburdoble");
        docRef.get().then((snapShots)=>{
        this.setState({
       items4:snapShots.docs.map(item=>{
       return alert(item.data().item);
  }) })})
  }

  export const getExtra1=(id)=>{
    let docRef=db.collection("extra1");
        docRef.get().then((snapShots)=>{
        this.setState({
       items5:snapShots.docs.map(item=>{
       return alert(item.data().item);
  }) })})
  }

  export const getExtra2=(id)=>{
    let docRef=db.collection("extra2");
        docRef.get().then((snapShots)=>{
        this.setState({
       items5:snapShots.docs.map(item=>{
       return alert(item.data().item);
  }) })})
>>>>>>> 80e85e54218ff7756a79fc504ce35dee4f51c3de
  }