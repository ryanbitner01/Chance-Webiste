import { MerchRepositoryFake } from "@data/repositories/MerchRepositoryFake";

export const createRepos = () => ({
	merchRepo: new MerchRepositoryFake(),
});
