import style from "./center.module.css";

export default function Center({ children, ...props }: any) {
  return (
    <div {...props} className={style.center}>
      {children}
    </div>
  )
}