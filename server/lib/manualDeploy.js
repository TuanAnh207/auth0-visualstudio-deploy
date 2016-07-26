import { getRepositoryId } from './tfs-git';
import deploy from './deploy';

export default (storageContext, id, branch, repository, sha, user) =>
	getRepositoryId(repository)
		.then(repositoryId => deploy(storageContext, id, repositoryId, branch, repository, sha, user));
