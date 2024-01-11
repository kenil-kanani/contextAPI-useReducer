import '../styles/ModerateView.css';

export default function ModerateView({ title, description }) {
    return (
        <div className="moderate-view">
            <h2 className='moderate-title'>{title}</h2>
            <p className='moderate-description'>{description}</p>
        </div>
    )
}
