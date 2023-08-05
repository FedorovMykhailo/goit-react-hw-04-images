import { useState, useEffect } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGalery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";
import fetchPixabay from "../api/services"

const App = ()=> {

  // state = {
  //   query: "",
  //   galery: [],
  //   isLoading: false,
  //   error: null,
  //   page: 1,
  //   isModal: false,
  //   modal: { img:'', desc:''}
  // }

  
   const [ query, setQuery] = useState("")
   const [ galery, setGalery] = useState([])
   const [ isLoading, setIsLoading] = useState(false)
   const [ error, setError] = useState(null)
   const [ page, setPage] = useState(1)
   const [ isModal, setIsModal] = useState(false)
   const [ modal, setModal] = useState({ img:'', desc:''})

//  const  componentDidUpdate = async(prevProps, prevState) => {
    
//      if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
//        this.setState({ isLoading: true });
//       try {
//         const galery = await fetchPixabay(this.state.query, this.state.page);
//         this.setState(prev => { return { galery: [...prev.galery, ...galery.hits] } });
//         this.setState( {isLoading: false } )
//       } catch (error) {
//         this.setState({ error });
//       }
//       finally {
//         this.setState( {isLoading: false } )
//       }
//     }
//   }

//   useEffect(()=> { const handleFetchPixabay = async () => {
//    try {
//      const galery = await fetchPixabay(query, page);
//      console.log(galery);
//         setGalery(prev => { return [...prev, ...galery.hits] })
//         // this.setState(prev => { return { galery: [...prev.galery, ...galery.hits] } });
//         setIsLoading(false)
//       } catch (error) {
//         setError(error);
//       }
//       finally {
//         setIsLoading(false)
//       }
//   }
// }, [query,page])
  
  // useEffect(() => { if (query) handleFetchPixabay() }, [query, page])
  useEffect(() => {if (query) handleFetchPixabay(query, page) }, [query, page])
  
  // useEffect(() => { 
     
  //   if (query) { 
  //     setIsLoading(true)
  //     const galery = fetchPixabay(query, page);
  //     console.log(isLoading);
  //     galery.then(res =>
  //     { 
  //       setGalery(prev => { return [...prev, ...res.hits] })
  //     }).catch(setError(error)).finally(setIsLoading(false))
  //     } 
  // }, [query, page, error, isLoading])
  
  //useEffect(())

 const handleFetchPixabay = async (query, page)=> {
    try {
     setIsLoading(true)
        const galery = await fetchPixabay(query, page);
        setGalery(prev => { return [...prev, ...galery.hits] })
        // this.setState(prev => { return { galery: [...prev.galery, ...galery.hits] } });
        // setIsLoading(false)
      } catch (error) {
        setError(error);
      }
      finally {
        setIsLoading(false)
      }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const inputQuery = evt.currentTarget.elements[1].value
    console.log(inputQuery);
    if (query !== inputQuery) {
      setPage(1);
      setGalery([]);
      setQuery(inputQuery);
    }
    console.log(query);
  }

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1)

    //this.setState((prev) => { return {page: prev.page+1}});
  }

  const handleModal = (evt) => {
    const src = evt.currentTarget.attributes.src.value;
    const alt = evt.currentTarget.attributes.alt.value;
    setIsModal(true);
    setModal({img: src, desc: alt})

    // this.setState({ isModal: true, modal: {img: src, desc: alt}})
  }

  const handleCloseModal = (evt) => {
    if (evt.currentTarget===evt.target||evt.code === "Escape") setIsModal(false)
  }
  
    return (
    <div className="App">    
        <Searchbar submit={handleSubmit}></Searchbar>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        <ImageGalery galeryItems={galery} onModalClick={handleModal}></ImageGalery>
        {isLoading ? <Loader></Loader> : galery.length > 0 && <Button clickLoadMore={handleLoadMore}></Button>}
        {isModal && <Modal img={modal.img} desc={modal.desc} clickOverlay={handleCloseModal}></Modal>}
    </div>
  )
}

export default App
