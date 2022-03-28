# Queue

A queue is a data structure that organizes it's data in a list-like format; this means they are very similar to a Stack data structure. Queues are also flexible in regards to their size as they don't need to have a limit set from the beginning, like a Hash Table for example.

When comparing the Queue data structure to other data structures out there such as the Stack, which carries the closet resemblance, the key difference is the way how data is removed from them. For example, a queue uses a first in first out approach or FIFO approach. One way to visualize a queue is to imagine a line of people waiting to purchase their groceries at a grocery store. The people who get into line first are the people who get served at the checkout stand first.

When creating a Queue from scratch, there are a few methods along with their descriptions we should consider adding to it at a bare minimum:

- `print` - Prints the queue.
- `enqueue` - Adds a node to the tail of Queue list
- `dequeue` - Removes a node from the head of a Queue list
- `isEmpty` - Returns `true` if the Queue list is empty
- `front or peek` - Returns the data from the head of the Queue 

