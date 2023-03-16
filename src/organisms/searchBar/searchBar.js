import { Box, Text } from "../../atoms";
import { useAppContext } from "../../context/AppContext";
import { Colors } from "../layout/Colors";

export const SearchBar = (props) => {

   const { user } = useAppContext()
   const userName = user?.name?.split(' ')?.[0]
   const { large = false, placeholder = '', style = {}, onChange = () => { } } = props;

   return (
      <>
         <Box sx={styles.searchBarContainer}>
            <input
               placeholder={placeholder}
               style={{ ...styles.searchBar, ...style }}
               onChange={onChange}
            />
            <Divider />
            <Box sx={styles.userContainer}>
               <Text>{userName}</Text>
               <UserSilhouette />
            </Box>
         </Box>
      </>
   )
}

const Divider = () => (
   <Box sx={{
      display: 'flex',
      width: '1px',
      height: '60%',
      backgroundColor: Colors.background
   }} />
);

const UserSilhouette = () => (
   <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 30,
      height: 30,
      borderRadius: '50%',
      backgroundColor: '#eee',
      position: 'relative',
      overflow: 'hidden'
   }}>
      <Box sx={{
         width: 12,
         height: 12,
         borderRadius: '50%',
         backgroundColor: '#d6d6d6',
         position: 'absolute',
         top: 7,
         left: 0,
         right: 0,
         margin: 'auto'

      }} />
      <Box sx={{
         width: 22,
         height: 18,
         borderRadius: '50%',
         backgroundColor: '#d6d6d6',
         position: 'absolute',
         top: 21,
         left: 0,
         right: 0,
         margin: 'auto'
      }} />
   </Box>
);

const styles = {
   searchBarContainer: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#fff',
      width: '100%',
      borderRadius: 48,
      overflow: 'hidden',
      gap: 2,
      padding: `0px 20px`,
   },
   searchBar: {
      border: 'none',
      backgroundColor: 'inherit',
      // backgroundColor: '#777',
      boxSizing: 'border-box',
      outline: 'none',
      padding: 25,
      fontSize: 15,
      color: '#444',
      display: 'flex',
      flex: 1

   },
   userContainer: {
      display: 'flex',
      alignItems: 'center',
      padding: 'inherit',
      gap: 2,
   }
}