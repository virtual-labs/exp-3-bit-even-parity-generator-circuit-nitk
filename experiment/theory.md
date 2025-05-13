### INTRODUCTION  

<p style="text-align:justify;">A **Parity Generator** is a combinational logic circuit that generates the parity bit in the transmitter. A parity generator adds an extra bit to the signal that is being transmitted, so the errors can be recognized and rectified by the machine to some extent.  </p>

Parity generators are classified into two types:  
1. Even Parity Generator
2. Odd Parity Generator  

#### Even Parity Generator
<p style="text-align:justify;">A 3-bit even parity generator takes 3 inputs and adds an extra bit to the data, which is known as the parity bit. Then the data is transferred as 4 bits and the extra bit is the parity bit. In the even parity generator, it generates the bit such that the number of 1's in the input transferred (including the parity bit) is even.  The circuit keeps track of the number of 1's in the data, if the data has the odd number of 1's, then the circuit detects an error.  </p>

<p>**Example**: Let A, B, C be the inputs and P be the parity bit.  </p>
<p>Let A=1, B=1, C=0  </p>
<p>Now, the parity bit would be 0 to make the number of 1's even.  </p>
<p>So P=0 </p>
    
<p>Similarly,</p>

<center>  ![Truth Table](images/tt.png)  </center>

<center> Table-1: Table For Even Bit Parity Generator</center>

<center>  ![Truth Table](images/kmap.png)  </center>

<center> Figure-1: K-map for the Even Bit Parity Generator </center>

   <p>P = AB'C' + A'B'C + ABC + A'BC</p>  
<p>P = A(B ⊙ C) + A'(B ⊕ C) </p>  
<p>P = A(⊕)B(⊕)C</p> 

<center>  ![Even parity](images/parity.png)  </center>

<center>  Figure-2: Circuit diagram of Even parity generator </center>

   
<p style="text-align:justify;">**Note**:  With this parity generator, the errors in the data transmission cannot be detected to a complete extent. It can only detect the error when only one of the bits changes. If two bits get changed, then the system cannot detect the error. Since the number of 1's being even or odd will remain the same.   </p>

<u>**Stuck-at Fault**</u>  
<p style="text-align:justify;">A stuck-at fault is a particular fault model used by fault simulators and automatic test pattern generation (ATPG) tools to mimic a manufacturing defect within an integrated circuit. Individual signals and pins are assumed to be stuck at Logical '1', '0' and 'X'.  </p>
Stuck-at faults are classified into two types:  
1. SA0 fault  
2. SA1 fault  

**SA0 Fault**  
<p style="text-align:justify;">When a signal, or gate output, is stuck at 0 value, independent of the inputs to the circuit, then the signal is said to be "stuck at 0 fault" or "SA0 fault".  </p>
**SA1 Fault**   
<p style="text-align:justify;">When a signal, or gate output, is stuck at 1 value, independent of the inputs to the circuit, then the signal is said to be "stuck at 1 fault" or  "SA1 fault". Output for the even parity bit when there is a stuck-at fault. </p> 

**Example**:  
Suppose there is a stuck-at 0 fault in wire A.  

<center>  ![K-map](images/bit.png)  </center>

<center> Figure-3: Kmap for parity bit</center>


<p>P = A'B'C + A'BC' </p> 
<p>P = A'(B ⊕ C)     {A' is 1 since A has SA0}  </p>
<p>P = B⊕C</p>

<center>  ![truth table for epv](images/stuckat.png)  </center>

<center>Table-2: Table For Even Parity Bit with Stuck-at Fault</center>




