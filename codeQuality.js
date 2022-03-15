// level 2
const getUser = async () => {
	try {
		let doc = await Promise.all(getUser(), getProfile(), getPosts());

		let user = doc[0];
		let Profile = doc[1];
		let post = doc[2];

		const userProfile = {
			user,
			Profile,
			post,
		};

		return userProfile;
	} catch (error) {
		throw Errror("Promise Error");
	}
};
