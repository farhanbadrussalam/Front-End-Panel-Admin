import FormCrud from '../../../../components/custom-components/form-crud'
const index = (props) => {
  const permission = props.location.state.permission
  const data = props.location.state.data

  return (
    <FormCrud permission={permission} data={data} />
  );
};


export default index