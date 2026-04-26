import { repos } from "@di/repositories";
import { useQuery } from "@tanstack/react-query";

export const useMerchDetails = (id: string) => {
	return useQuery({
		queryKey: ["merch-details"],
		queryFn: () => repos.merchRepo.getMerchItemById(id),
		enabled: !!id,
	});
};
