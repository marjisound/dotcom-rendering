import type { IdApiUserData } from '@root/src/web/lib/getIdapiUserData';
import { getIdApiUserData } from '@root/src/web/lib/getIdapiUserData';

export const getBrazeUuid = async (ajaxUrl: string): Promise<string | void> => {
	return getIdApiUserData(ajaxUrl)
		.then((data: IdApiUserData) => data.user?.privateFields?.brazeUuid)
		.catch((error) => {
			window.guardian.modules.sentry.reportError(error, 'getBrazeUuid');
		});
};
