import style from "./getintouch.module.scss";
import GetInTouchForm from "../GetInTouchForm/GetInTouchForm";
import GetInTouchImages from "../GetInTouchImages/GetInTouchImages";

const GetInTouch = () => {
    return (
        <section className={style.getintouch}>
            <div className={style.imagesitem}>
                <GetInTouchImages/>
            </div>
            <div className={style.formitem}>
                <GetInTouchForm/>
            </div>
        </section>
    )
}

export default GetInTouch;