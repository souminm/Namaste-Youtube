# Debouncing
  - typing slow - i p h o n e
                - difference between the keystoke is less (200ms)

 - typing fast - 30ms

# Performance
  - iphone 14 pro max = 14 letter *  1000 = 14000 api calls
  - with debouncing = 3 Api calls  * 1000 = 3000 api calls

  -Debouncing with 200ms
  - if difference between two keystokes < 200 ms - decline Api call
  - > 200 ms   make an api call and show the results.


# Cache
- time complexity to search in array  = O(n)
- time complexity to search in object = o(1)
[i,ip,iph,iphone]
{
    i:
    ip:
    iph:
    iphone:
}          

new Map(); - more optimized as compared to searching in an object.


# N lvl nesting
