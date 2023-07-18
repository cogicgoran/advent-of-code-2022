7031
8020
2353
3127

8027
13092
7531
12350

10451
9259
13080
12849

3984
2140
2655
2766
8665
2282
4391
1435
4821
4977

2366

6198
17922
22945

2077
6263
11643
11377
3735
11634
5022

16598
7968

31400
22664

5414
5057
1898
3063
4075
2527
3502
6713
3109
6376
2487
2279
1057

12654
11007
2365
8272
2895

15798
3536
14549

1066
1181
let input = ``; // Add input
let maxCalories = -1;

const arr = input.split('\n');

for(let i = 0, currentElfCalories = 0; i < arr.length; i++) {
	if(!arr[i]) {
		maxCalories = Math.max(maxCalories, currentElfCalories);
		currentElfCalories = 0;
		continue;
	} 
	currentElfCalories += parseInt(arr[i]);
}
console.log(maxCalories);
