import Dropzone from "react-dropzone"
import { Box, Text } from "../../atoms";
import { useAppContext } from "../../context/AppContext";
import { getRandomInt } from '../../helpers'
import { uploadFile } from "../../validators/api-requests";
import { Colors } from "../layout/Colors";

export const CustomDropzone = (props) => {

   const { setLoading, alert } = useAppContext()
   const { callback = () => { }, companyId = null, companyLogo = false } = props;
   
   const onDropFiles = async (files) => {
      const uploadedFiles = files.map(file => ({
         file,
         id: getRandomInt(1, 999),
         name: file.name,
         preview: URL.createObjectURL(file),
         progress: 0,
         uploaded: false,
         error: false,
         url: null
      }))

      uploadedFiles.forEach(processUpload)
   }

   const processUpload = async (uploadedFile) => {
      setLoading(true)

      const formData = new FormData()

      formData.append('file', uploadedFile.file, uploadedFile.name)

      try {
         const response = await uploadFile({ formData, companyId, companyLogo });
         const { data = {}, status } = response;
         const { file = {} } = data;

         if (status === 201) {
            alert.success('Upload relizado com sucesso.');
            callback(file)
            return file
         }
         alert.error('Tivemos um problema ao fazer upload do arquivo.');
         return null
      } catch (error) {
         alert.error('Tivemos um problema ao fazer upload do arquivo.');
         console.log(error)
         return null
      } finally {
         setLoading(false)
      }
   }

   return (
      <Dropzone accept={"image/*"} onDrop={onDropFiles}>
         {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
            <Box {...getRootProps()}
               style={{
                  ...styles.dropZoneContainer,
                  backgroundColor: isDragActive && !isDragReject ? Colors.background : isDragReject ? '#ff000042' : ''
               }}
            >
               <input {...getInputProps()} />
               <Box style={{ textAlign: 'center', display: 'flex', fontSize: 12 }}>
                  <Text small style={{ color: Colors.paleDarkBlue }}>
                     {props.txt || 'Clique ou arraste aqui seus arquivos para upload'}
                  </Text>
               </Box>
            </Box>
         )}
      </Dropzone>
   )
}

const styles = {
   dropZoneContainer: {
      display: 'flex',
      width: '100%',
      padding: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      flexDirection: 'column',
      border: `2px dashed ${Colors.paleDarkBlue + 'aa'}`,
      cursor: 'pointer'
   }
}