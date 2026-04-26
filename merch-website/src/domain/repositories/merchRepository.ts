import type { MerchItem, MerchItemDetails } from "@domain/entities/MerchItem";

export interface MerchRepository {
	getMerchList(): Promise<MerchItem[]>;
	getMerchItemById(id: string): Promise<MerchItemDetails>;
}
