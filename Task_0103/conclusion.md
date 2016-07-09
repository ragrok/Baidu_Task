### 三栏式布局的实现
#### 使用Float浮动布局。
-  html代码
<pre>
<div1 class="left">左</div1>
<div1 class="right">右</div1>
<div1 class="center">中</div1>
<pre>
- 中间的div放后面，当前两个div使用了float属性定位于左右之后，中间的div自动就上去了。
- 中间的div会自动占据整个也页面，这时使用margin属性来调节它的左右大小，达到边上两栏固定，中间自适应。
#### 使用position
- 将左右两个div设为绝对定位，设置在左边和右边，中间使用margin属性来调节大小，也能达到自适应的目的，但是弊端很大，屏幕很小时，很难看，并且两边的div会重合，不推荐这种。
