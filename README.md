# 🖍️🎨 Coloring Nike Sneakers
You can color the Nike sneakers as you scroll.

#### ✔️ Things to remember
```sh
for(let i=0; i<totalNumber; i++) {
    section[i].classList.remove('active');
    pointBtn[i].classList.remove('active');
  }
 ```
* The reason for using section[i] and pointBtn[i] in the for statement is to access and manipulate each element of the array.

* section and pointBtn are arrays that contain the elements of the section and point button, respectively. i represents the current index in the iteration, which can take values from 0 to totalNumber - 1.

* section[i] and pointBtn[i] access the elements corresponding to index i in the section and pointBtn arrays, respectively. Thus, the for loop allows you to access and manipulate all elements of the arrays sequentially.

* The for statement above uses the classList.remove('active') method to remove the 'active' class of each section and point button. section[i] and pointBtn[i] are used to remove the class by selecting the element corresponding to index i in the corresponding array.

* This means that in order to access and manipulate each element of the array using the for statement, you need to access it using its index.
  
