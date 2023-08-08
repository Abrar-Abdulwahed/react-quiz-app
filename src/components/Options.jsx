
import PropTypes from 'prop-types';
const Options = ({index, setCurrentAnswer}) => {
    const handleAnswerChange = (answer) => {
        setCurrentAnswer(answer);
    };
    return (
        <div>
            <input
            type="radio"
            id={`true-${index}`}
            name={`answer-${index}`}
            value="True"
            onChange={() => handleAnswerChange('True')}
            />
            <label htmlFor={`true-${index}`}>True</label>

            <input
            type="radio"
            id={`false-${index}`}
            name={`answer-${index}`}
            value="False"
            onChange={() => handleAnswerChange('False')}
            />
            <label htmlFor={`false-${index}`}>False</label>
        </div>
    )
}

export default Options

Options.propTypes = {
    index: PropTypes.number,
    setCurrentAnswer: PropTypes.func,
};