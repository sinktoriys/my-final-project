import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'Container/App/App'
// import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{<App />}</React.StrictMode>)

// const Title = () => {
//     return <h1>Hello App Component</h1>
// }
// const Description = () => {
//     return (
//         <React.Fragment>
//             <p className="red">
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                 Eligendi et excepturi repudiandae, recusandae obcaecati tempore
//                 suscipit facilis mollitia sapiente vitae a molestias placeat
//                 repellat ipsa dolore rem, dolor sit. Provident.
//             </p>
//             <p>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                 Eligendi et excepturi repudiandae, recusandae obcaecati tempore
//                 suscipit facilis mollitia sapiente vitae a molestias placeat
//                 repellat ipsa dolore rem, dolor sit. Provident.
//             </p>
//         </React.Fragment>
//     )
// }
// const App = () => {
//     return (
//         <div>
//             <Title />
//             <Description />
//         </div>
//     )
// }
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// )
