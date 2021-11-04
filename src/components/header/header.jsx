import Baner from  '../baner/baner';
import Form  from   '../form/form';
import  "./header.css";
const header = () => {
    return (
        <div className="header">
            <Baner />
            <Form />
        </div>
    );
};
export default header;