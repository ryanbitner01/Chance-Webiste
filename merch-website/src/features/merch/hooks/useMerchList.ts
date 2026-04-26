import { useQuery } from "@tanstack/react-query";
import { repos } from "@di/repositories";

export const useMerchList = () => {
	return useQuery({
		queryKey: ["merch-list"],
		queryFn: () => repos.merchRepo.getMerchList(),
	});
};
