import { useState } from 'react';
import { VeteranStatus } from '../../types/types';
import UserInfoForm from '../UserInfoForm/UserInfoForm';

import './StatusChecker.scss';

const StatusChecker = () => {
	const [status, setStatus] = useState<VeteranStatus>();
	const [error, setError] = useState<boolean>(false);

	return (
		<div className="status-checker">
			<h1 className="status-checker__title">VA Status Checker</h1>
			<h5 className="status-checker__subtitle">Enter information below to determine VA status</h5>
			<UserInfoForm setStatus={setStatus} setError={setError} />
			{status && (
				<div className="status-checker__status">
					Status: <span className="status-checker__status__text">{error ? 'Error retreiving status' : status?.veteran_status}</span>
				</div>
			)}
		</div>
	);
};
export default StatusChecker;
