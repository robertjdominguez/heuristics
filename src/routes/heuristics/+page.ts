import type { PageLoad } from './$types';
import { heuristics } from '$lib/allHeuristics';

export const load: PageLoad = async () => {
	return { heuristicsData: heuristics };
};
