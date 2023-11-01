
interface Props {
    children:React.ReactNode
    className?:string
}

const Container = ({children,className}:Props) => {
  return (
    <div className={`px-2  lg:px-20 py-6 ${className}`} >
        {children}
    </div>
  )
}

export default Container