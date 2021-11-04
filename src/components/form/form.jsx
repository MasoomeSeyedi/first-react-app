import './form.css';
const formComponent = () => {
    return(
        <div className="header-form">
            <form>
                <input type="text" placeholder="نام کاربری" 
                style={{ marginTop: "10px" }} />
                <input type="password" placeholder="رمز عبور" />
                <button>ورود به بخش مدیریت وبلاگ</button>
                <a href="#">کلمه عبور خود را فراموش کردم</a>
            </form>
        </div>
    );
};
export default formComponent;
