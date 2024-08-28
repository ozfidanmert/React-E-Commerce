
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {

  return (
    <>
      <PageContainer >
        <Header />
        <RouterConfig />
        <Loading />
        
      </PageContainer>

    </>
  )
}

export default App
