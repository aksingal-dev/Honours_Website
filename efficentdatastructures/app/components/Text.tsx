//answers 

//Arrays practice questions
export const A1 = "\
    public static int RemoveWithHelp(int arr[], int n){\n\
    //check if the array is empty or only contains one value.\n\
    if (n == 0 || n == 1){\n\
       return n;\n\
    }\n\
\
    //Create a temporary array to store unique values\n\
    int[] temp = new int[n];\n\
    int j=0; //Keeps a track of the number of unique elements\n\
\
    for(int i=0;i<n-1;i++){\n\
       if(arr[i] != arr[i+1]) //Since the array is sorted, identical values will be next to each other.\n\
       temp[j++] = arr[i]; //copy unique value to temp array\n\
    } \n\
\
    temp[j++] = arr(n-1); //Add the last element to the temp array\n\
\
    //copy elements from the temp array to the start of the original array.\n\
    for(int i = 0; i<j;i++){\n\
       arr[i] = temp[i];\n\
    }\n\
\
    //Return number of unique elements\n\
    return j;\n\
}\
 "

export const A2 = "\
public static int[] ParityCheck(int[] arr, int n, int parity){\n\
   \
    //check if tha array is empty\n\
    if(n == 0){\n\
       return arr;\n\
    }\n\
    int num = 0; //stores number of 1s in the array\n\
    if(parity == 0){//code for when the array needs to have even number of 1s.\n\
       for(i=0;i<n;i++){\n\
          if(arr[i] == 1){\n\
             num++;\n\
          }\n\
       }\n\
       if(num%2 == 1){ //Sees if the current number of 1s is odd\n\
          if(arr[n-1] == 1){ //if the last variable is 1, comvert it to 0 to have even 1s\n\
             arr[n-1] == 0;\n\
          }\n\
          else{ //else we need to convert it to 1 to have an even number of 1s\n\
             arr[n-1] == 1;\n\
          }\n\
          return arr;\n\
       }\n\
       return arr;\n\
   }\n\
    else{ //code for when the array needs to have an odd number of 1s\n\
        for(i=0;i<n;i++){\n\
          if(arr[i] == 1){\n\
             num++;\n\
          }\n\
       }\n\
       if(num%2 == 0){ //of the current number of ones is even\n\
          if(arr[n-1] == 1){ //if the last variable is 1, comvert it to 0to have even 1s\n\
             arr[n-1] == 0;\n\
          }\n\
          else{ //else we need to convert it to 1 to have an even number of 1s\n\
             arr[n-1] == 1;\n\
          }\n\
          return arr;\n\
       }\n\
       return arr;\n\
   }\
   }\
   "

//Lists Practice questions
export const L1 = "\
   public void Duplicate(Node start){\n\
    while(start != null){ //move through the list till the last node.\n\
       Node temp = start.next;\n\
\
       while(temp!=null && temp.data == start.data){\n\
          temp = temp.next;\n\
       }\n\
\
       start.next = temp;\n\
       start = start.next;\n\
    } \n\
\
 }\
"

export const L2 = "\
public void Listrev(Node start){\
    Node temp = null;\n\
 \
    while(start !=null){ //treaverse through the list\n\
       temp = start.previous; //save previous node in a temp variable\n\
       start.next = temp; //save the new value of temp as the next node.\n\
       start = start.previous; //make the current valuse to become the previous node. \n\
    }\n\
 \
    if(temp != null){//the list is not empty and has more than one element\n\
       start = temp.previous;\n\
    }\n\
   }\
"

//Stacks practice questions
export const S1 = "\
public class paranthsis{\n\
   public int checkstring(String input){\n\
      \n\
      Stack<Character> symbols = new Stack<>();\n\
      \n\
      for(char c : input.toCharArray()){\n\
          if(c == '(' || c == '{' || c == '['){\n\
              symbols.push(c);\n\
          }\n\
          \n\
          else if (c == ']' && !symbols.isEmpty() && symbols.peek() == ']'){\n\
              symbols.pop();\n\
          }\n\
          \n\
          else if (c == ')' && !symbols.isEmpty() && symbols.peek() == '('){\n\
              symbols.pop();\n\
          }\n\
          \n\
          else if (c == '}' && !symbols.isEmpty() && symbols.peek() == '{'){\n\
              symbols.pop();\n\
          }\n\
          \n\
          else {\n\
              return false;\n\
          }\n\
      }\n\
      return symbols.isEmpty();\n\
   }\n\
  }\n\
  \n\
"

export const S2 = "\
   public static int[] tempcheck(int[] temps){\n\
   int index = temps.length;\n\
   int[] result = new int[index];\n\
   for(int i=0;i<n;i++){\n\
       result[i] = -1;\n\
   }\n\
   Stack<Integer> tstack = new Stack<>();\n\
   \n\
   for(int i=0; i<n; i++){\n\
       while(!tstack.isEmpty() && temps[tstack.peek()]>temps[i]){\n\
           result[tstack.peek()] = i-tstack.pop();\n\
       }\n\
       tstack.push(i);\n\
   }\n\
   \n\
   return result;\n\
}\n\
"

//Queues practice questions
export const Q1 = "\
class recentCalls{\n\
   LinkedList<integer> callLogs;\n\
   \n\
   public recentCalls(){\n\
       this.callLogs = new LinkedList<Integer>();\n\
   }\n\
   \n\
   public int ring(int t){\n\
       this.callLogs.addLast(t);\n\
       \n\
       while(this.callLogs.getFirst()<t-1440){\n\
           this.callLogs.removeFirst();\n\
       }\n\
       \n\
       return this.callLogs.size();\n\
   }\n\
}\n\
"

export const Q2 = "\
class binrev{\n\
   static void createbinrev(int n){\n\
       Queue<String> binarys = mew LinkedList<String>();\n\
       \n\
       binarys.add(0);\n\
       \n\
       while(n-- > 0){\n\
           binarys.add(binarys.peek() + '1');\n\
           binarys.add(binarys.peek() + '0');\n\
           \n\
           System.out.print(binarys.poll() + ' ');\n\
       }\n\
   }\n\
}\n\
"

//Trees practice questions
export const T1 = "\
public Node routerind(Node root, int val){\n\
   if(root == null){\n\
      return root;\n\
   }\n\
   else if(root.val < val){\n\
      return routerInd(root.right,val);\n\
   }\n\
   else if(root.val> val){\n\
      return routerInd(root.left, val);\n\
   }\n\
   else{\n\
      return root;\n\
   }\n\
  }\n\
"

export const T2 ="\
class answer {\n\
   int ans;\n\
   Set<parkNode> covered;\n\
   public int trashCanCover(parkNode root) {\n\
       ans = 0;\n\
       covered = new HashSet();\n\
       covered.add(null);\n\
       \n\
       depthSearch(root, null);\n\
       return ans;\n\
   }\n\
   \n\
   public void depthSearch(parkNode node, parkNode par) {\n\
       if (node != null) {\n\
           depthSearch(node.left, node);\n\
           depthSearch(node.right, node);\n\
           \n\
           if (par == null && !covered.contains(node) ||\n\
                   !covered.contains(node.left) ||\n\
                   !covered.contains(node.right)) {\n\
               ans++;\n\
               covered.add(node);\n\
               covered.add(par);\n\
               covered.add(node.left);\n\
               covered.add(node.right);\n\
           }\n\
       }\n\
   }\n\
  }\n\
" 

export const T3 = "\
public class AcrDict{\n\
   static final int symbols = 20;\n\
   static class node{\n\
      node[] child = new node[symbols];\n\
      boolean valid;\n\
      node(){\n\
         valid = false;\n\
         For(int i=0;i<symbols;i++){\n\
            child[i] = null;\n\
         }\n\
      }\n\
   };\n\
   static node root;\n\
   \n\
   static boolean isValid(String acr){\n\
      int height;\n\
      int acrLength = acr.length();\n\
      int index;\n\
      node crawl = root;\n\
      \n\
      for(height = 0; height < acrLength; height++){\n\
         index = acr.charAt(height).tolower() - 'a';\n\
         \n\
         if(crawl.child[index] == null){\n\
            return false;\n\
         } \n\
         \n\
         crawl = crawl.child[index];\n\
      }\n\
      \n\
      return crawl.valid;\n\
   }\n\
  }\n\
"

//Sorting practice questions
export const So1 = "\n\
public Node PlaylistNode(ListNode head){\n\
   ListNode dummy = new ListNode();\n\
   ListNode current = head;\n\
   ListNode previous;\n\
   \n\
   while(current != null){\n\
       previous = dummy;\n\
       \n\
       while(previous.next != null && previous.next.plays <= current.plays){\n\
           previous = previous.next;\n\
       }\n\
       \n\
       ListNode next = current.next;\n\
       current.next = previous.next;\n\
       previous.next = current;\n\
       current = next;\n\
   }\n\
   \n\
   return dummy.next;\n\
 }\n\
"

export const So2 = "\n\
public String[] sortnames(String[] names, int[] marks){\n\
   String[] answer = new String[names.length];\n\
   \n\
   HashMap<Integer, String> hmap = new HashMap<>();\n\
   int index = 0;\n\
   \n\
   for(int i=0;i<names.length;i++){\n\
       hmap.put(marks[i],names[i]);\n\
   }\n\
   \n\
   Arrays.sort(marks); //Arrays.sort uses a dual pivot quick sort on numbers and as a result is extremely efficient for data that is not astronomically large or diverse.\n\
   \n\
   for(int i = marks.length -1;i >= 0; i++){\n\
       answer[index++] = hmap.get(marks[i]);\n\
   }\n\
   \n\
   return answer;\n\
}"

export const So3="public int tasksdoable(int[] time, int[] tasks){\n\
   \n\
   int numtasks = 0;\n\
   int i=0;\n\
   int j=0;\n\
   int next = 0;\n\
   boolean assigned;\n\
   \n\
   Arrays.sort(tasks);\n\
   Arrays.sort(time);\n\
   \n\
   while(i < time.length && next < tasks.length){\n\
       assigned = false;\n\
       j=next;\n\
       \n\
       while(j<tasks.length && !assigned){\n\
           if (time[i]>=task[j]){\n\
               numtasks++;\n\
               assigned = true;\n\
               next = j+1;\n\
           }\n\
           else{\n\
               j++;\n\
           }\n\
       }\n\
       \n\
       i++;\n\
   }\n\
   \n\
   return numtasks;\n\
 }"

 //Additional Practice problems
 export const M1_a="public boolean targetCheck(int[] arr, int target){\n\
   for (int i = 0; i < arr.length; i++) {\n\
       for (int j = i + 1; j < arr.length; j++) {\n\
           if (arr[j] == target - arr[i]) {\n\
               return true;\n\
           }\n\
       }\n\
   }\n\
   return false;\n\
 }"

 export const M1_b = "public int[] targetCheck(int[] arr, int target) {\n\
   Map<Integer, Integer> map = new HashMap<>();\n\
   for (int i = 0; i < arr.length; i++) {\n\
       int comp = target - arr[i];\n\
       if (map.containsKey(comp)) {\n\
           return true;\n\
       }\n\
       map.put(arr[i], i);\n\
   }\n\
   // In case there is no solution, we'll just return null\n\
   return false;\n\
}"

export const M2="public boolean canGrad(int courses, int[][] prereq) {\n\
    if (prereq == null || prereq.length == 0) {\n\
        return true;\n\
    }\n\
    int[] degclass = new int[courses];\n\
    Map<Integer, List<Integer>> map = new HashMap<>();\n\
    \n\
    for (int i = 0; i < prereq.length; i++) {\n\
        degclass[prereq[i][0]]++;\n\
        if (!map.containsKey(prereq[i][1])) {\n\
            List<Integer> curr = new ArrayList<>();\n\
            curr.add(prereq[i][0]);\n\
            map.put(prereq[i][1], curr);\n\
        } else {\n\
            map.get(prereq[i][1]).add(prereq[i][0]);\n\
        }\n\
    }\n\
    \n\
    Queue<Integer> queue = new LinkedList<>();\n\
    for (int i = 0; i < degclass.length; i++) {\n\
        if (degclass[i] == 0) {\n\
            queue.add(i);\n\
        }\n\
    }\n\
    \n\
    while (!queue.isEmpty()) {\n\
        int curr = queue.poll();\n\
        List<Integer> list = map.get(curr);\n\
        for (int i = 0; list != null && i < list.size(); i++) {\n\
            degclass[list.get(i)]--;\n\
            if (degclass[list.get(i)] == 0) {\n\
                queue.add(list.get(i));\n\
            }\n\
        }\n\
    }\n\
    \n\
    for (int i : degclass) {\n\
        if (i != 0) {\n\
            return false;\n\
        }\n\
    }\n\
    return true;\n\
}"
 export const M3="public int leastInterval(char[] tasks, int n) {\n\
   int[] counter = new int[26];\n\
   int max = 0;\n\
   int maxCount = 0;\n\
   for(char task : tasks) {\n\
       counter[task - 'A']++;\n\
       if(max == counter[task - 'A']) {\n\
           maxCount++;\n\
       }\n\
       else if(max < counter[task - 'A']) {\n\
           max = counter[task - 'A'];\n\
           maxCount = 1;\n\
       }\n\
   }\n\
   \n\
   int partCount = max - 1;\n\
   int partLength = n - (maxCount - 1);\n\
   int emptySlots = partCount * partLength;\n\
   int availableTasks = tasks.length - max * maxCount;\n\
   int idles = Math.max(0, emptySlots - availableTasks);\n\
   \n\
   return tasks.length + idles;\n\
}"

export const M4="public List<List<Integer>> pathSum(TreeNode root, int sum){\n\
   List<List<Integer>> result  = new LinkedList<List<Integer>>();\n\
   List<Integer> currentResult  = new LinkedList<Integer>();\n\
   pathSum(root,sum,currentResult,result);\n\
   return result;\n\
}\n\
public void pathSum(TreeNode root, int sum, List<Integer> currentResult,List<List<Integer>> result) {\n\
   if (root == null){\n\
       return;\n\
   } \n\
   currentResult.add(new Integer(root.val));\n\
   if (root.left == null && root.right == null && sum == root.val) {\n\
       result.add(new LinkedList(currentResult));\n\
       currentResult.remove(currentResult.size() - 1);\n\
       return;\n\
   } \n\
   else {\n\
       pathSum(root.left, sum - root.val, currentResult, result);\n\
       pathSum(root.right, sum - root.val, currentResult, result);\n\
   }\n\
   currentResult.remove(currentResult.size() - 1);\n\
}"

//Helper methods for tree practice questions
export const T1_q = "\
public class Node{\n\
   int val;\n\
   parkNode left;\n\
   parkNode right;\n\
   parkNode() {}\n\
   parkNode(String loc){\n\
      this.loc = loc;\n\
   }\n\
   parkNode(String loc, parkNode left, parkNode right){\n\
      this.loc = loc;\n\
      this.left = left;\n\
      this.right = right;\n\
   }\n\
  }\n\
"

export const T2_q="\
public class parkNode{\n\
   String loc;\n\
   parkNode left;\n\
   parkNode right;\n\
   parkNode() {}\n\
   parkNode(String loc){\n\
      this.loc = loc;\n\
   }\n\
   parkNode(String loc, parkNode left, parkNode right){\n\
      this.loc = loc;\n\
      this.left = left;\n\
      this.right = right;\n\
   }\n\
  }\n\
"

//chat responses

//preprogrammed responses
//Arrays
export const a1Help = "To solve this programming problem, you can use the following approach:\n\
\n\
1. Create a new array to store the unique transactions.\n\
2. Iterate through the original array of transactions and compare each transaction with the previous one.\n\
3. If the current transaction is different from the previous one, add it to the new array of unique transactions.\n\
4. Once you have iterated through the entire original array, replace the original array with the new array of unique transactions.\n\
5. Return the number of unique transactions in the new array. \n"

export const a2Help = "To solve this programming problem, you can use the following approach:\n\
\n\
1. Count the number of 1's in the input binary array.\n\
2. Determine if the number of 1's is odd or even based on the parity value.\n\
3. Calculate the value that should be at the last index of the array based on the parity value and the number of 1's.\n\
4. Modify the input array to include the value calculated in step 3 at the last index.\n\
5. Return the modified array.  "

//Lists
export const l1Help = "To solve this programming problem, you can use the following approach:\n\
\n\
1. First, we need to make sure the head of the linked list is not null. If it is null, then there's nothing to do and we can simply return null.\n\
2. We'll need two pointers to traverse the linked list: current and previous. We'll initialize current to head and previous to null.\n\
3. We'll also need a set to keep track of the song names we've seen so far. We'll initialize an empty set called songNames.\n\
4. We'll traverse the linked list using the current pointer. For each node, we'll check if the song name is already in the songNames set.\n\
5. If the song name is already in the set, then we have a duplicate node that we need to remove. We can remove the current node by updating the next pointer of the previous node to skip over the current node.\n\
6. If the song name is not in the set, then we add the song name to the songNames set and update the previous pointer to point to the current node.\n\
7. Once we've iterated through the entire linked list, we return the head of the modified linked list."

export const l2Help = "Here is an approach to solve the problem of reversing the order of a doubly linked list:\n\
\n\
1. First, we check if the provided starting node is null or not. If it is null, then there's nothing to do and we can simply return null.\n\
2. We initialize three pointers prev, current, and next. prev will initially be null, current will point to the starting node, and next will point to the next node after the starting node.\n\
3. We traverse the doubly linked list using the current pointer. For each node:\n\
    a. We set the next pointer to point to the prev node (i.e., we reverse the direction of the link).\n\
    b. We update the prev, current, and next pointers to move to the next node in the original list.\n\
4. After we have traversed the entire list, the prev pointer will point to the last node of the original list, which is now the first node of the reversed list. We update the next pointer of the last node to null.\n\
5. We return the prev node, which is now the head of the reversed doubly linked list."

//queues
export const q1Help = "To approach this problem in Java without using any inbuilt function, we can use bitwise operators to convert decimal numbers to binary and then reverse the binary representation.\n\
\n\
1. Create an ArrayList to store the reverse binary representation of each number from 1 to n.\n\
2. Loop from 1 to n.\n\
3. Convert each number to binary using bitwise operators and store it in a StringBuilder.\n\
4. Reverse the binary representation by swapping the bits.\n\
5. Convert the reversed binary representation to an integer and add it to the ArrayList.\n\
6. Return the ArrayList."

export const q2Help = "Here is an approach to solve the problem in Java:\n\
\n\
1. Create a class named RecentCalls.\n\
2. Declare a private instance variable List<Integer> to store the call logs.\n\
3. Implement an intialize method to reset the call log list.\n\
4. Implement a ring method that takes a parameter t and does the following:\n\
5. Add the current call time t to the call log list.\n\
6. Remove all the call logs that are older than 1 day (i.e., before t-1440).\n\
7. Return the size of the call log list."

//stacks
export const s1Help = "You can solve this problem using a stack data structure in Java. Here's one approach to implement the solution:\n\
\n\
1. Create a stack of characters to store opening brackets.\n\
2. Loop through each character in the string input.\n\
3. If the character is an opening bracket (i.e., '(', '{', or '['), push it onto the stack.\n\
4. If the character is a closing bracket (i.e., ')', '}', or ']'), pop the top element from the stack and check if it matches the corresponding opening bracket.\n\
5. If the popped element does not match the corresponding opening bracket or the stack is empty, return false as the string is invalid.\n\
6. After looping through all characters, check if the stack is empty. If it is not empty, return false as the string is invalid. Otherwise, return true as the string is valid."

export const s2Help = "The idea behind this problem is to use a stack to keep track of the indices of the temperatures that we haven't found a temperature lower than yet. We iterate through the temperatures array, and for each temperature, we check if it's higher than the temperature at the top of the stack. If it is, we pop the index from the stack and set the wait days for that temperature to the difference between the current index and the popped index. We keep doing this until either the stack is empty or the temperature at the top of the stack is greater than the current temperature. After we've gone through all the temperatures, if there are any indices left in the stack, we know that there was no temperature lower than those indices, so we set their wait days to -1. Finally, we return the result array."

//sorting
export const so1Help = "To sort the linked list based on the number of times each song has been played, we can use the merge sort algorithm. The merge sort algorithm is efficient in terms of both time and space complexity, making it a suitable choice for this problem.\n\
\n\
Here are the steps to sort the linked list using merge sort:\n\
1. Divide the linked list into two halves. We can use the slow and fast pointer technique to find the middle of the linked list.\n\
2. Recursively sort the left and right halves of the linked list.\n\
3. Merge the two sorted halves to create a new sorted linked list.\n\
4. Return the head of the new sorted linked list."

export const so2Help = "Here's an approach to solve this problem in Java:\n\
\n\
1. First, sort both the tasks and time arrays in ascending order to simplify the problem.\n\
2. Initialize two pointers i and j to point to the start of the tasks and time arrays respectively.\n\
3. For each task, check if there exists a developer with available time to complete the task. If there is, assign the task to the developer and move both pointers i and j to the next position. If not, move the time pointer j to the next position and check again.\n\
4. Repeat step 3 until either all the tasks have been assigned or all the developers have been assigned a task."

export const so3Help = "To approach this problem in Java, you can use a Map data structure to map the item names to their respective costs. Once you have the map, you can use a Comparator to sort the items based on their cost in descending order. Finally, you can return the sorted item names in an array."

//trees
export const t1Help = "To solve this problem using trees, we can use a recursive approach to traverse the binary tree and keep track of the nodes that need to be covered by a trash can.\n\
\n\
1. First, we can define a recursive function coverPark that takes a node and returns a boolean value indicating whether or not the node needs to be covered by a trash can. If a node needs to be covered, we add it to a set coveredNodes.\n\
2. Inside the coverPark function, we can recursively call the function on the node's left and right children. If either child needs to be covered, we mark the current node as needing to be covered as well. Finally, we return a boolean value indicating whether or not the current node needs to be covered.\n\
3. Once we have traversed the entire tree and populated the coveredNodes set, we can return the size of the set as the minimum number of trash cans required to cover the entire park."

export const t2Help = "To approach this problem in Java using trees, you can follow these steps:\n\
\n\
1. Define a TreeNode class that represents each node in the binary search tree. Each node should have a value, a left child, and a right child.\n\
2. Define a method called findNode that takes the root of the tree and an integer value val as input. The method should search the tree for a node with the given value.\n\
3. In the findNode method, you can use a recursive approach to search the tree. Start at the root node and compare the value of the node with val. If they are equal, return the node. If val is less than the value of the current node, search the left subtree. If val is greater than the value of the current node, search the right subtree.\n\
4. If the findNode method does not find a node with the given value, return null.\n\
5. If the findNode method does find a node with the given value, return the subtree rooted at that node. To do this, simply return the node itself, along with its left and right children."

export const t3Help = "One possible approach to solving this problem using trees in Java is to create a Trie data structure. Trie is a tree-like data structure used for efficient retrieval of key-value pairs where keys are usually strings. In this case, the keys are the acronyms and the values can be a boolean indicating if the acronym is valid or not.\n\
The Trie is constructed by adding each acronym to the Trie as a sequence of characters. Each node in the Trie represents a prefix of the acronym, and the edges represent the characters that follow the prefix. The end of a valid acronym is marked by a special end-of-word marker.\n\
To search for a valid acronym, we traverse the Trie starting from the root and following the edges that correspond to the characters in the acronym. If we reach the end of the acronym and the last node is marked as a valid end-of-word marker, then the acronym is valid."

//additional practice problems
export const m1Help = "The idea is to use nested loops to iterate over every possible pair of elements in the given array and check if their sum is equal to the given target value.\n\
In the outer loop, we iterate over each element of the array, one by one, and in the inner loop, we iterate over the remaining elements of the array to check if any of them add up to the current element to give the target sum.\n\
If we find a pair of elements whose sum is equal to the target value, we return true from the function. If we exhaust all possible pairs of elements and still cannot find a pair whose sum is equal to the target value, we return false from the function."

export const m2Help = "To solve this problem, we can use a topological sorting algorithm. We can represent the courses and their prerequisites as a directed graph, where each course is a node and each prerequisite is a directed edge. We can then perform a topological sort on this graph, which will give us a valid order in which we can take the courses. If the graph has a cycle, then it is impossible to finish all the courses this year."

export const m3Help = "One approach to solve this problem is to use a priority queue to keep track of the tasks that can be scheduled next. We can initialize a hashmap to store the count of each task in the tasks array.\n\
Then, we can loop through the tasks array and add each task to the priority queue. If a task has a count greater than 0 in the hashmap, we can add it to the priority queue only if the last occurrence of the task was more than n units ago. Otherwise, we can add an idle task to the priority queue.\n\
Finally, we can keep adding tasks from the priority queue to a result list until the priority queue is empty. The length of the result list would be the least number of units of time that the CPU will take to finish all the given tasks."

export const m4Help = "To solve this problem, you can perform a depth-first search on the binary tree, keeping track of the current path and the sum of the distances in the path. When you reach a leaf node, you can check if the sum of the distances equals the maximum time. If it does, add the current path to the result list."

//Code Explainations

export const A1CodeExp= "This code implements a function called RemoveWithHelp that takes an array of integers arr and its size n as input, and removes duplicate elements from the array. The function assumes that the input array is sorted in non-descending order. Here's a breakdown of what the code is doing step by step: First, the code checks whether the array is empty or has only one element. In such cases, the function simply returns the size of the input array n. Next, a new temporary array temp is created with the same size as the input array n. This array is used to store unique elements of the input array. The variable j is initialized to 0, which will be used to keep track of the number of unique elements found so far. A for loop is used to iterate through the input array, comparing each element to its adjacent element. If the two elements are not equal, the current element is considered unique and copied to the temp array using temp[j++] = arr[i];. Here, j++ is used to increment the j variable and move to the next index in the temp array. After the loop completes, the last element of the input array is added to the temp array using temp[j++] = arr[n-1];. Another for loop is used to copy the unique elements from the temp array back to the start of the original arr array. This ensures that the modified array is returned in place of the input array. Finally, the number of unique elements found is returned by the function by returning the value of j. Overall, this code efficiently removes duplicates from an input array while maintaining the order of the original array.  "

export const A2CodeExp = "This code defines a function called ParityCheck that takes an array of integers arr, its size n, and an integer parity as input. The goal of the function is to modify the input array to ensure that it has either an even or odd number of 1s, depending on the value of parity. Here's a step-by-step breakdown of what the code is doing: First, the code checks whether the input array is empty or not. If the array is empty, the function simply returns the input array without making any changes. The variable num is initialized to 0, which will be used to keep track of the number of 1s in the input array. If parity is 0, the function needs to modify the array to ensure it has an even number of 1s. A for loop is used to iterate through the input array and count the number of 1s. If the current number of 1s is odd, the last element of the array is modified by flipping the value from 0 to 1 or from 1 to 0. This ensures that the array has an even number of 1s. Finally, the input array is returned. If parity is not 0, the function needs to modify the array to ensure it has an odd number of 1s. Another for loop is used to count the number of 1s in the input array. If the current number of 1s is even, the last element of the array is modified by flipping the value from 0 to 1 or from 1 to 0. This ensures that the array has an odd number of 1s. Finally, the input array is returned. If the input array already has the required parity, the function simply returns the input array without making any changes. Overall, this code modifies an input array to ensure it has the desired parity of 1s by flipping the value of the last element if necessary.  "

export const L1CodeExp = "This is a method named Duplicate which takes a Node object called start as a parameter. It removes duplicates from the linked list starting from the node passed as start. Here's a brief explanation of the code:<br/>\
while(start != null){: This is a while loop that continues until start is null. This loop will traverse the linked list until the end.<br/>\
Node temp = start.next;: This line creates a new Node object called temp and assigns it the value of the next node of the start node. This is done so that we can compare start with the next node in the linked list to see if there are any duplicates.<br/>\
while(temp!=null && temp.data == start.data){: This is another while loop that continues until temp is null or temp.data is not equal to start.data. This loop is used to check if there are any duplicates in the linked list starting from start.<br/>\
temp = temp.next;: This line moves the temp node to the next node in the linked list so that we can check if it has the same value as start.data.<br/>\
start.next = temp;: This line sets the next node of start to be equal to temp. This essentially removes the duplicates from the linked list, as it skips over all nodes that have the same value as start.data.<br/>\
start = start.next;: This line sets start to be equal to start.next, which moves us to the next node in the linked list.<br/>\
The method ends with a closing brace.<br/>\
In summary, this code traverses through a linked list and removes duplicates by skipping over all nodes that have the same value as the current node. This is achieved by checking each node's value against the start.data value and moving to the next node until the end of the list is reached."

export const L2CodeExp = "This is a method named Listrev which takes a Node object called start as a parameter. It reverses a doubly-linked list starting from the node passed as start. Here's a brief explanation of the code:<br/>\
Node temp = null;: This line creates a new Node object called temp and assigns it a null value. This is done to hold the previous node temporarily.<br/>\
while(start !=null){: This is a while loop that continues until start is null. This loop will traverse the linked list until the end.<br/>\
temp = start.previous;: This line saves the previous node of the start node in the temp variable. This is done so that we can update the next and previous nodes of the start node.<br/>\
start.next = temp;: This line sets the next node of the start node to be equal to temp, which is the previous node.<br/>\
start = start.previous;: This line sets start to be equal to the previous node of the current start node. This essentially moves us to the previous node in the linked list.<br/>\
The above steps 3 to 5 are repeated until the end of the linked list is reached, at which point start becomes null.<br/>\
if(temp != null){: This is an if statement that checks if temp is not null. If temp is not null, it means that the linked list has more than one element.<br/>\
start = temp.previous;: This line sets start to be equal to the previous node of temp. This essentially sets start to the last node in the original linked list, which is now the first node in the reversed linked list.<br/>\
The method ends with a closing brace.<br/>\
In summary, this code traverses through a doubly-linked list and reverses the order of the nodes by swapping the next and previous nodes of each node. It saves the previous node in a temp variable, updates the next node, and then moves to the previous node until the end of the linked list is reached. Finally, it sets the start node to the last node in the original linked list, which is now the first node in the reversed linked list."

export const S1CodeExp = "This code defines a class called 'paranthsis' which contains a method called 'checkstring'. The purpose of this method is to check if a given input string has balanced parentheses or not. The method creates an empty stack of characters called 'symbols' and then loops through each character in the input string. If the character is an opening parenthesis, it is pushed onto the stack. If it is a closing parenthesis, the method checks if the stack is empty or if the top of the stack contains the matching opening parenthesis. If either of these conditions is not met, the method returns false. If the loop completes without returning false, the method checks if the stack is empty. If it is, then the parentheses are balanced and the method returns true. If it is not, then the parentheses are not balanced and the method returns false."

export const S2CodeExp = "This code implements a function called tempcheck that takes an integer array temps as input and returns another integer array as output. The purpose of the function is to find out, for each temperature in the input array, how many days one needs to wait to see a higher temperature. The output array has the same length as the input array, and each element in the output array corresponds to the number of days one needs to wait to see a higher temperature than the corresponding temperature in the input array. If there is no higher temperature, the output element should be set to -1. The function initializes an array called result with all elements set to -1. It then creates a stack called tstack, which is used to keep track of the indices of temperatures in the input array. It then iterates over each temperature in the input array, and for each temperature, it pops all temperatures from the stack that are lower than the current temperature, and for each popped temperature, it sets the corresponding element in the result array to the difference between the index of the current temperature and the index of the popped temperature. Finally, it pushes the index of the current temperature onto the stack. The function then returns the result array, which contains the number of days to wait to see a higher temperature for each temperature in the input array."

export const Q1CodeExp = "This is a Java class named recentCalls. It represents a list of recent phone calls and provides a method to add new calls and remove old ones.<br/>\
Here's a brief explanation of the code:<br/>\
LinkedList<Integer> callLogs;: This line declares a new LinkedList object called callLogs that holds integer values. This is the data structure used to store the recent phone calls.<br/>\
The constructor public recentCalls(){...} initializes the callLogs list by creating a new instance of the LinkedList class.<br/>\
public int ring(int t){...} is a method that takes an integer t representing the timestamp of a new call, adds it to the end of the callLogs list using the addLast method, and then removes any calls from the beginning of the list that are more than 1440 (24 hours) minutes old using a while loop and the removeFirst method. The method then returns the current size of the callLogs list using the size method.<br/>\
In summary, this Java class provides a way to keep track of the recent phone calls made within the last 24 hours. It uses a LinkedList data structure to store the calls and adds new calls to the end of the list while removing any calls that are more than 24 hours old from the beginning of the list. The ring method returns the current number of calls in the list."

export const Q2CodeExp = "This is a Java class named binrev which contains a single static method called createbinrev. This method takes an integer n and generates a binary sequence in reverse order up to the nth term.<br/>\
Here's a brief explanation of the code:<br/>\
static void createbinrev(int n){...} declares a static method named createbinrev which takes an integer n as a parameter.<br/>\
Queue<String> binarys = new LinkedList<String>(); creates a new Queue data structure of strings named binarys.<br/>\
binarys.add(0); initializes the binarys queue by adding a 0 to it.<br/>\
The while loop with condition n-- > 0 continues to execute as long as n is greater than 0. It decrements n by 1 after each iteration.<br/>\
Inside the loop, binarys.add(binarys.peek() + '1'); and binarys.add(binarys.peek() + '0'); generate new binary strings by appending '1' and '0' respectively to the front of the string at the head of the binarys queue using the peek() method.<br/>\
System.out.print(binarys.poll() + ' '); prints the binary string at the head of the binarys queue using poll() method which also removes it from the queue.<br/>\
The loop continues to generate and print binary strings until n becomes 0.<br/>\
In summary, this Java class generates a binary sequence in reverse order up to the nth term by using a Queue data structure to store and manipulate binary strings. The createbinrev method takes an integer n as input, and generates binary strings by appending '1' and '0' to the front of the string at the head of the binarys queue, until n becomes 0. The binary strings are then printed to the console."

export const So1CodeExp = "This is a Java method that takes a ListNode object as input and returns another ListNode object. It uses the input ListNode object to create a sorted linked list based on the number of plays of songs in a playlist. The method starts by creating a dummy ListNode object, which will be used to hold the sorted linked list. It then sets the current ListNode object to the head of the input linked list. A while loop is used to iterate through each ListNode in the input linked list. Within this loop, another while loop is used to find the appropriate position in the dummy linked list for the current ListNode based on the number of plays. The loop stops when it finds the appropriate position or reaches the end of the dummy linked list. After the appropriate position is found, the current ListNode is inserted into the dummy linked list by setting its next pointer to the next ListNode in the list and setting the previous ListNode's next pointer to the current ListNode. Finally, the current ListNode is updated to the next ListNode in the input linked list and the loop continues until all nodes in the input list have been processed. Once the loop completes, the method returns the next ListNode after the dummy ListNode, which is the sorted linked list in ascending order based on the number of plays."

export const So2CodeExp = "This is a Java method that takes two arrays as input: an array of strings representing student names and an array of integers representing their corresponding marks. The method returns a sorted array of student names based on their marks, with the highest marks first. The method first creates a new array of the same size as the input array to hold the sorted names. It also creates a HashMap to map each mark to its corresponding student name. It then iterates through the input arrays, adding each mark-name pair to the HashMap. Next, it sorts the marks array in ascending order using the built-in Arrays.sort method. Finally, it iterates through the sorted marks array from highest to lowest, looking up the corresponding student name from the HashMap and adding it to the answer array. The sorted answer array is then returned by the method."

export const So3CodeExp = "This code is a function called tasksdoable which takes two arrays as input parameters - time and tasks. The time array contains integers representing the amount of time available to complete a task, while the tasks array contains integers representing the time required to complete a task. The function first initializes several variables - numtasks to 0, i and j to 0, next to 0, and assigned to false. Then it sorts both arrays using the Arrays.sort() method. The function then enters a while loop that will continue as long as the value of i is less than the length of the time array and the value of next is less than the length of the tasks array. Within the while loop, a boolean variable assigned is set to false, and the variable j is set to next. Then, another while loop is entered that will continue as long as the value of j is less than the length of the tasks array and assigned is still false. Within this while loop, the function checks whether the time available is greater than or equal to the time required for the current task (task[j]). If it is, then the numtasks variable is incremented, assigned is set to true, and next is updated to j+1. If it is not, then j is incremented. After the inner while loop, i is incremented, and the outer while loop continues until either i or next becomes greater than the length of the corresponding array. Finally, the function returns the value of numtasks, which represents the number of tasks that can be completed within the available time."

export const T1CodeExp = "This is a recursive function called routerind that searches for a node with a given value val in a binary search tree. The function takes in two arguments: root: the root node of the binary search tree val: the value to search for in the tree The function checks if the root is null. If it is null, it means that the tree is empty, so the function returns null. If the root is not null, the function compares the value of the root node to the value to search for. If the value of the root node is less than the search value, the function calls itself recursively with the right child of the root node as the new root. If the value of the root node is greater than the search value, the function calls itself recursively with the left child of the root node as the new root. If the value of the root node is equal to the search value, the function returns the root node. The recursive calls continue until either the node with the given value is found or the search reaches a null node, in which case null is returned."

export const T2CodeExp = "This code defines a class answer with an instance method trashCanCover that takes a parkNode object as an argument and returns an integer value. The parkNode object represents a binary tree where each node represents a location in a park, and some of the nodes have trash cans. The trashCanCover method initializes an instance variable ans to 0 and creates a new HashSet called covered that is initially empty except for a null value. It then calls the depthSearch method on the root node of the binary tree, passing null as the parent node. The depthSearch method performs a depth-first search of the binary tree. For each node, it recursively calls itself on the left and right children nodes, and then checks if the current node and its children nodes are covered by trash cans. If the current node is the root node (i.e., par is null) and it is not covered by a trash can, or if either of its children nodes are not covered by trash cans, then it increments the ans variable, adds the current node and its children nodes to the covered set, and sets par to node for the next recursive call. After the depth-first search is complete, the trashCanCover method returns the final value of ans. This value represents the minimum number of additional trash cans that need to be placed in the park in order to cover all of the locations."

export const T3CodeExp = "This code defines a class AcrDict for an acronym dictionary that uses a trie data structure to store and search for acronyms. Here is a breakdown of the code: symbols: An integer constant representing the number of possible symbols (in this case, lowercase letters of the English alphabet) that can be used to form acronyms. node: A nested class representing a node in the trie. Each node has an array of child nodes (one for each possible symbol) and a boolean value indicating whether or not the node represents a valid acronym. root: A static variable of type node representing the root of the trie. isValid: A static method that takes a string argument representing an acronym and returns a boolean value indicating whether or not the acronym is valid (i.e., exists in the trie). This method uses a loop to traverse the trie, starting at the root and following the child nodes corresponding to the symbols in the acronym. If the loop reaches the end of the acronym and the final node is marked as valid, the method returns true; otherwise, it returns false."

export const M1aCodeExp = "The targetCheck method takes an array of integers arr and an integer target, and checks if there exist two distinct elements in the array whose sum is equal to the target. It does this by iterating through each element of the array and, for each element, iterating through the remaining elements to check if the sum of the current element and any of the remaining elements is equal to the target. If a pair of elements whose sum equals the target is found, the method returns true. If no such pair is found, the method returns false. Note that this implementation has a time complexity of O(n^2), where n is the length of the input array. This means that for large arrays, the method may be slow and inefficient. There are more efficient algorithms for solving this problem, such as using a hash set to store seen values or sorting the array and using two pointers."

export const M1bCodeExp = "This code takes an array of integers arr and a target integer target, and checks whether there are two elements in the array whose sum is equal to the target. The code uses a hash map to store the elements of the array along with their indices. It then iterates over the array and for each element, calculates the complement that is needed to achieve the target (i.e., target - arr[i]). If the complement is already present in the hash map, it means that we have found two elements whose sum is equal to the target, and the function returns true. Otherwise, it adds the current element to the hash map. If no such pair is found, the function returns false. Overall, the time complexity of this algorithm is O(n) since we only iterate over the array once, and the space complexity is also O(n) since we store all the elements of the array in the hash map."

export const M2CodeExp = "This code seems to implement a topological sort algorithm to determine if it's possible to complete a given set of courses with their prerequisites. It initializes an array degclass to keep track of the number of prerequisites each course has, and a map to keep track of the prerequisites for each course. The code then creates a queue and adds all the courses with no prerequisites to it. It iteratively dequeues courses from the queue and decrements the number of prerequisites for each of their successors. If a successor no longer has any prerequisites, it is added to the queue. This process continues until the queue is empty. After the loop, the code checks if there are any courses with remaining prerequisites. If so, it returns false because it means that it's not possible to complete all the courses with their prerequisites. Otherwise, it returns true."

export const M3CodeExp = "This code calculates the minimum amount of time required to complete a given set of tasks, with a cooldown period between two identical tasks. The input consists of an array of characters tasks representing the tasks to be executed and an integer n representing the cooldown period between two identical tasks. The code first creates an array counter of 26 integers to keep track of the count of each task. It then iterates over each task and increments its corresponding count in counter. While doing so, it also keeps track of the task with the maximum count and the number of tasks that have this maximum count. After counting all the tasks, the code calculates the number of partitions that are needed to separate each occurrence of the task with the maximum count. It also calculates the length of each partition, accounting for the cooldown period between two identical tasks. With this information, the code calculates the number of empty slots and the number of available tasks. The number of idle periods is then calculated as the maximum between 0 and the number of empty slots minus the number of available tasks. Finally, the code returns the total time required to complete all the tasks, including the idle periods. The time complexity of this algorithm is O(n), where n is the length of the tasks array, since it iterates over the array only once."

export const M4CodeExp = "This is a recursive implementation of a solution to find all root-to-leaf paths in a binary tree that sum up to a given target value. The input consists of a binary tree root and a target value sum. The function returns a list of all such paths, where each path is represented as a list of integers. The function pathSum takes four parameters: root: the root of the current subtree. sum: the remaining sum to be reached. currentResult: the current path from root to the current node. result: the list of all root-to-leaf paths that sum up to the target value. The function starts by checking if the current node is null, in which case it simply returns. If the current node is not null, it adds the current node's value to the currentResult list. If the current node is a leaf node (i.e., it has no left or right child), the function checks if the remaining sum is equal to the current node's value. If it is, it adds the currentResult list to the result list of all paths and removes the last element of currentResult list (which is the current node's value). If the current node is not a leaf node, the function recursively calls itself on its left and right children with sum - root.val as the new target value. After the recursive calls have returned, the function removes the last element of currentResult list (which is the current node's value) before returning."




//Questions.

export const A1Q = "<b>Professional Life: </b>The billing system for a company you work at has gone haywire. It is adding multiple copies of the same transactions and causing errors. The transaction ids are stored in an array of size <b>n</b> in ascending order. write a java method to remove the duplicate transactions from the array. You are allowed to use additional memory to solve this problem and the method returns an integer (number of unique transactions).\
NOTE: You have to display unique transactions from the original array NOT return a new array with the unique transactions.\
<br/>   <b>Example: Input:</b> transaction = [1,1,2] <br/>\
        <b>Output:</b> 2, transaction = [1,2,_] <br/> \
        <b>Explanation:</b> Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively. <br/>"
export const A2Q = "<b>Personal Life: </b>Many modern computers use parity bits as a way of finding out if data is corrupted and recovering corrupted data. Write a method that takes a binary Array and a parity value, and returns an array with the value at the last index fixed to match the parity.\
Your method will get the following as inputs\
<ul>\
    <li>\
        An array <b>arr</b> where each element is either 0 or 1.\
    </li>\
    <li>\
        An integer <b>n</b> which is the size of the array.\
    </li>\
    <li>\
        An integer <b>parity</b> which will be 1 or 0.\
        <ul>\
            <li>\
            If parity is 1, the array should have an <b>odd</b> number of 1s.\
            </li>\
            <li>\
                If parity is 0, the array should have an <b>even</b> number of 1s.\
            </li>\
        </ul>\
    </li>\
</ul>\
<b>Example: Input:</b> arr=[11001], n=5, 0 <br/>\
                <b>Output: </b> arr=[11000] <br/>\
                <b>Explaination: </b> Since the number of 1s in the array are odd (3) but the parity bit indicates we need an even number of 1s, we convert the last digit to 0 as it was a one. If the last digit was 0, we would have converted it to a 1. <br/>"
export const L1Q = "<b>Professional Life: </b>You are designing a plugin for a music player that takes the head from a list and automatically skips over duplicate songs added to the list (in alphabetical order). Design a method that removes duplicate songs from the list and returns the head. You may only traverse the list once and the method is provided the starting song of the list.\
<br/>   <b>Example: Input:</b> list = [a,a,b, c] <br/>\
    <b>Output:</b> list = [a,b,c] <br/> \
    <b>Explanation:</b> Your function should return return the head of the list with the duplicate removed.<br/>"
export const L2Q = "Personal Life: </b>You have a double linked list that represents the most recently used applications on your friend's computer (from first to last) which somehow broke. to find out what application caused the error, you are tying to reverse the order in which the applications were used. To do so, you need to reverse the data in the linked list. You are provided with the starting node and each application is represented by an ID.\
<br/>For example if the <b>original Double linked list</b> is: 10<->11<->12<->13<->14\
<br/>The list <b>after running</b> your method should be: 14<->13<->12<->11<->10</p><br/>"
export const S1Q = "Professional Life: </b>You are writing a debugger for a program that checks if the programmer has provided the right number of brackets and in the correct order. Given a string **input** that only contains <b>(</b>,<b>)</b>,<b> {'{'} </b>,<b>{'}'}</b>,<b>{'['}</b>, or <b>{']'}</b>. Write a method to check if the given string is valid. A string is valid if:\
<ul>\
    <li>\
    Every opening bracket has a corresponding closing bracket of the same type and vice versa.\
    </li>\
    <li>\
    The brackets are closed in the correct order. That is, if a square bracket is opened before a regular one, the regular bracket needs to close before the square one.\
    </li>\
</ul>\
   <b>Example: Input:</b>  input = '()' <br/>\
        <b>Output:</b> true <br/> \
        <b>Example: Input:</b>  input = '(]' <br/>\
        <b>Output:</b> false <br/> "
export const S2Q = "Personal Life: </b>You want to maximize the time you spend at the beach during your holiday so you're looking for the longest group of days where the temperature is hot. Given an array of daily temperatures, return an array <b>result</b> such that each value in result represents the number of days one has to wait for a temperature lower than the corresponding temperature in the temperature array. If there is no such day, the result array should store a -1.\
<br/>   <b>Example: Input:</b>  temps = '[[30,40,20,60]]' <br/>\
        <b>Output:</b> [2,1, -1, -1] <br/> "
export const Q1Q = "<b>Professional Life: </b>Given an integer <b>n</b> return a list of all binary numbers from 1 to n with their bits flipped.\
<br/><b>Example: Input:</b> if the number is <b>4</b>.<br/>\
 <b>Output:</b> 1, 0, 01, 00<br/>\
 <b>Explanation: </b> The first 4 binary numbers are 0 (zero), 1(one), 10(two), 11(three) the result should be the opposite of 0, 1, 10, 11</p>"
export const Q2Q = "<b>Personal Life: </b>Create a <b>RecentCalls</b> class that keeps a track of the number of calls within a time frame.\
<ul>\
    <li>\
    The class needs to have an initializer to reset the counter named recentCalls\
    </li>\
    <li>\
    The class needs to have a method <b>int ring(int t)</b> which adds a new call log at time <b>t</b> (where t represents the time in minutes.) and returns the number of requests that happened in the past day (1440 Minutes) including the new call.\
    </li>\
</ul>\
   <b>Example: Input:</b>  ['recentCalls', 'ring(1)', 'ring(100)', 'ring(1441)', 'ring(1442)'] <br/>\
        <b>Output:</b> [null, 1, 2, 3, 3] <br/> \
        <b>Explanation: </b>RecentCalls recentCalls = new RecentCalls(); <br/>\
                            recentCalls.ring(1);     // requests = [1], range is [-1439,1], return 1 <br/>\
                            recentCalls.ring(100);   // requests = [1, 100], range is [-1339,100], return 2 <br/>\
                            recentCalls.ring(1441);  // requests = [1, 100, 1441], range is [1,1441], return 3 <br/>\
                            recentCalls.ring(1442);  // requests = [1, 100, 1441, 1442], range is [2,1442], return 3 <br/>"
export const So1Q = " <b>Professional Life: </b>You are trying to improve the music player application you were working on in the Arrays and Linked Lists page. To do so, you want to sort songs based on the number of times they are played. Each song is represented by a node in a linked list that contains <b>data</b> the song itself, <b>plays</b> an integer number of times the song has ben played. Design a method that sorts (ascending) the linked list in an efficient manner (based on time and space) and returns the head of the new list to enable this feature. You are provided the head node of the list. each data, plays pair is unique.\
<br/>   <b>Example: Input:</b> list = [[a, 5],[b, 2], [c, 7]] <br/>\
        <b>Output:</b> list = [b, a, c] <br/> \
        <b>Explanation:</b> Your function should return return the head of the sorted list. <br/>"
export const So2Q = "<b>Professional Life: </b>You are a program manager in-charge of a group of developers. You have a list of <b>n</b> integers, <b>tasks</b> where tasks[i] represents the time taken to complete the ith job. You also have another list of <b>m</b> integers, <b>time</b> where time[i] represents the amount of work time the ith developer has. You can assign a task to a developer as long as the time they have is more than or equal to the time taken to complete the job. Each developer can only complete one job in the day. Write a program to find the maximum number of jobs you can make the developers do.\
<br/>   <b>Example: Input:</b> tasks = [1,2,3], time = [1,1] <br/>\
        <b>Output:</b> 1 <br/> \
        <b>Explanation:</b> You have 3 tasks but only one of them can be completed with the time that your developers have. As a result, you return 1. <br/>"
export const So3Q = "<b>Personal Life: </b>You are given an array of strings <b>Item</b>, and an array <b>Cost</b> that consists of distinct positive integers. Both arrays are of length n. For each index i, Item[i] and Cost[i] denote the item name and cost for a list of gifts. Return names sorted in descending order by the cost to find out what the maximum number of gifts you can buy is with the money you have. You may use additional memory space to solve the problem.\
<br/>   <b>Example: Input:</b>  items = ['tea','coffee','sugar'], cost = [180,165,170] <br/>\
        <b>Output:</b> ['tea','sugar','coffee'] <br/>\
        <b>Explanation:</b> tea is the most expensive followed by sugar and then coffee. <br/>"
export const T1Q = "<b>Professional Life: </b>You are given the root of a binary tree where each node represents a location on the map of a park. You are trying to install trash cans in the ground in such a way that the entire park is covered. A trash can installed on a node can cover its parent, itself and its immediate children. Return the minimum number of trash cans required to cover the entire park.\
<br/>   <b>Example: Input:</b>  root = [0,0,null,0,null,0,null,null,0]<br/>\
        <b>Output:</b> 2 <br/>\
        <b>Explanation: </b> a minimum of 2 trash cans will be needed. A valid configuration would be at index 1 and 5"
export const T2Q = " <b>Personal Life: </b>There seems to be something wrong with your new router. You need to check if the indexes in the router, stored as a Binary Search Tree, are correct. Write a program that takes the root of the tree as well as an integer value <b>val</b> and finds the node where the node value equals <b>val</b>. <b>Return a subtree rooted at that node</b> if the program is unable to find any such node return <b>null</b>.\
<br/>   <b>Example: Input:</b>  root = [0,1,1,2,3,5,7,12,19], val= 7<br/>\
        <b>Output:</b> [7, 12, 19] <br/>\
        <b>Explanation: </b> the value was found at index 6. A subtree rooted at 6 was returned."
export const T3Q  = " <b>Personal Life: </b>You are trying to make it easier to search through commonly used terms in one of your courses to find a valid acronym. In order to do so, you need to make a dictionary of all possible acronyms and show which ones are valid. Write a program that allows for these acronyms to be stored and searched through. You don't need to worry about insertion or deletion. The maximum number of symbols used in an acronym is 20."
export const M1Q = "<b>Professional Life: </b>You are trying to implement a self checking system that works on the principle of target matching in an array. Assume you are given an Array of integers <b>arr</b> and a target value <b>target</b> return true if two numbers in the array add up to the target value. If no such pair exists, return false.\
<br/>   <b>Example: Input:</b> nums = [2,7,11,15], target = 9<br/>\
                <b>Output:</b> true<br/> \
                <b>Explanation:</b> Because nums[0] + nums[1] == 9, we return true. <br/>"
export const M2Q  = " <b>Personal Life: </b>You are in the process of trying to plan out your year of classes. In order to graduate, you have to take an integer <b>courses</b> number of courses. Some of these courses also have prerequisites defined as <b>prereq[i] = [a,b]</b>, which means you need to take course b in order to take course a. Develop a program that takes in the number of courses and a 2d array of all prerequisites to check if you can finish your degree this year (true) or not (false). All the pairs of prereq are unique.\
<br/>   <b>Example: Input:</b>courses = 2, prereq = [[1,0]]<br/>\
                <b>Output:</b> true<br/>\
                <b>Explanation:</b> There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible. <br/>"
export const M3Q = "<b>Professional Life: </b>Given a characters array <b>tasks</b>, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in <b>one unit of time</b>. For each unit of time, the CPU could complete either one task or just be idle. However, there is a non-negative integer <b>n</b> that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks. Return the least number of units of times that the CPU will take to finish all the given tasks.\
<br/>   <b>Example: Input:</b>tasks = ['A','A','A','B','B','B'], n = 2<br/>\
                <b>Output:</b> 8<br/>\
                <b>Explanation:</b> a-b-idle-a-b-idle-a-b <br/> There is at least 2 units of time between any two same tasks. <br/>"
export const M4Q = "<b>Personal Life: </b>You are given the root of a binary tree where each node represents the distance between two points on a journey and a maximum time that your journey can take. Return all root-to-leaf paths where the sum of the node values in the path equals Maximum time to help plan your journey. Each path should be returned as a list of the node values, not node references.\
<br/>   <b>Example: Input:</b>root = [5,4,8,11,null,13,4,7,2,null,null,5,1], maxtime = 22<br/>\
                <b>Output:</b> [[5,4,11,2],[5,8,4,5]]<br/> \
                <b>Explanation:</b> There are two paths whose sum equals maxtime: <br/> 5 + 4 + 11 + 2 = 22 <br/> 5 + 8 + 4 + 5 = 22 <br/>"