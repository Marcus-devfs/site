import { Box, Text } from "../atoms";
import { Colors } from "../organisms";

export const Button = (props) => {

   const {
      secondary = false,
      tertiary = false,
      onClick = () => { },
      bold = false,
      text = '',
      style = {}
   } = props;

   return (
      <Box
         sx={{
            ...styles.buttonContainer,
            ...(secondary && {
               backgroundColor: '#dde4e7',
               color: Colors.darkBlue,
               "&:hover": {
                  opacity: 0.6,
                  cursor: 'pointer'
               }
            }),
            ...(tertiary && {
               backgroundColor: 'transparent',
               color: Colors.darkBlue,
               border: `1px solid #d1d9dd`,
               "&:hover": {
                  opacity: 0.6,
                  cursor: 'pointer'
               }
            }),
            ...style
         }}
         onClick={onClick}
      >
         <Text bold={bold ? true : false}  style={{ color: 'inherit', }}>{text}</Text>
      </Box>
   )
}

const styles = {
   buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.darkRed,
      color: '#f0f0f0',
      padding: {xs:`6px 10px`, xm: `8px 16px`, md: `8px 16px`,lg: `8px 16px`},
      borderRadius: 2,
      "&:hover": {
         backgroundColor: Colors.darkRed + 'dd',
         cursor: 'pointer'
      }
   }
}