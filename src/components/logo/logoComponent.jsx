import './logoComponent.css'
import aks from '../../assets/images/photo_2021-04-13_18-21-12.jpg';
const logoComponent = () => {
    return (
  <div className="div-img">
  <img src={aks} alt="LOGO"/>
</div>
    );
}
export default logoComponent;