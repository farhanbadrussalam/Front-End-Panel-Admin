import { useLocation } from 'react-router-dom';
import FormCrud from '../../../../components/custom-components/form-crud'
const index = (props) => {
  const location = useLocation()
  const permission = location.state?.permission
  console.log(props);

  return (
    <FormCrud permission={permission} />
  );
};


export default index