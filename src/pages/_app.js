import { Box } from '../atoms'
import { AppProvider } from '../context/AppContext'
import { Colors, HeaderMenu } from '../organisms'
import '../styles/globals.css'

const menuItems = [
   { to: '/home/HomePage', text: 'HOME' },
   { to: '/ambients/ambient', text: 'AMBIENTES'},
   { to: '/', text: 'PRODUTOS' },
   { to: '/', text: 'SOBRE NÓS' },
   { to: '/', text: 'CONTATO' },
];

function App({ Component, pageProps }) {
   console.log(pageProps)
   return (
      <AppProvider>
         <Box sx={styles.bodyContainer}>
            <HeaderMenu menuItems={menuItems} />
            <Box sx={styles.contentContainer}>
               <Component {...pageProps} />
            </Box>
         </Box>
      </AppProvider>
   )
}

export default App;

const styles = {
   bodyContainer: {
      display: "flex",
      minHeight: "100vh",
      flexDirection: "row",
      width: '100%',
   },
   contentContainer: {
      display: "flex",
      width: '100%',
      flexDirection: 'column',
      flex: 1,
      gap: `35px`,
      backgroundColor: '#fff',
      padding: { xs: `30px`, xm: `25px`, md: `50px`, lg: `0px 80px 0px 80px` },
      // paddingBottom: `60px`,
      overflowY: 'hidden',
      marginTop: { xs: `60px`, xm: 10, md: 10, lg: 10 }
   },
}