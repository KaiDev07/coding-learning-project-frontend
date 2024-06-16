import { useAppSelector, useAppDispatch } from '../app/hooks'
import { clearError } from '../features/user/userSlice'

const ErrorModal = () => {
    const user = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch()

    return (
        <div className="section">
            <input
                className="modal-btn"
                type="checkbox"
                id="modal-btn"
                name="modal-btn"
                checked={user.error ? true : false}
                onChange={() => null}
            />
            <label
                htmlFor="modal-btn"
                style={{ maxHeight: '0px', maxWidth: '0px' }}
                onClick={() => dispatch(clearError())}
            ></label>
            <div className="modal">
                <div className="modal-wrap">
                    <p>{user.error}</p>
                </div>
            </div>
        </div>
    )
}

export default ErrorModal
