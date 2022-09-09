### INTRODUCTION<br>
<u><p class="head"><b>Introduction</b> </p></u>
    <p class="intro">A Parity Generator is a combinational logic circuit that generates the parity bit in the transmitter. A parity generator adds an extra bit to the signal that is being transmitted, so the errors can be recognized and rectified by the machine to some extent.</p>
    <p class="intro"> Parity generators are classified into two types:  <br> i)Even Parity Generator <br>ii)Odd Parity Generator</p>
    
   <u><p class="head"> <b>Even Parity Generator</b> </p></u> 
    <p class="intro">A 3-bit even parity generator takes 3 inputs and adds an extra bit to the data, which is known as the parity bit. Then the data is transferred as 4 bits and the extra bit is the parity bit. In the even parity generator, it generates the bit such that the number of 1's in the input transferred (including the parity bit) is even.  The circuit keeps track of the number of 1's in the data, if the data has the odd number of 1's, then the circuit detects an error.</p>
    <p class="intro"><b>Example:</b>  Let A, B, C be the inputs and P be the parity bit. <br>
        &emsp; &emsp;&emsp;&ensp;&nbsp;&ensp;Let A=1, B=1, C=0 <br>
        &emsp; &emsp;&emsp;&ensp; &ensp;Now, the parity bit would be 0 to make the number of 1's even. <br>
        &emsp; &emsp;&emsp;&ensp; &ensp;So P=0
    </p>
    <p class="intro">Similarly,</p>
    <img id="img1"src="images/tt.png" alt="Truth Table" >
    <p id="fig1" ><b>Table-1: Table For Even Bit Parity Generator </b></p>
    <img id="img2" src="images/kmap.png" alt="Truth Table" >
    <p id="fig2"><b>Figure-1: K-map for the Even Bit Parity Generator </b></p>
    <p class="intro">&emsp;&emsp;P = AB'C' + A'B'C + ABC + A'BC <br>&emsp;&emsp;P = A(B ⊙ C) + A'(B ⊕ C) <br>&emsp;&emsp;P = A(⊕)B(⊕)C</p>
    <img  id="img3"src="images/parity.png" alt="Even parity">
    <p id="fig3"><b>Figure-2: Circuit diagram of Even parity generator </b></p>
    <p class="intro"> <b>##Note:</b>   With this parity generator, the errors in the data transmission cannot be detected to a complete extent. It can only detect the error when only one of the bits changes. If two bits get changed, then the system cannot detect the error. Since the number of 1's being even or odd will remain the same.</p>
    <u><p class="head"><b>Stuck-at Fault</b> </p></u>
    <p class="intro">A stuck-at fault is a particular fault model used by fault simulators and automatic test pattern generation (ATPG) tools to mimic a manufacturing defect within an integrated circuit. Individual signals and pins are assumed to be stuck at Logical '1', '0' and 'X'. </p>
    <p class="intro"> Stuck-at faults are classified into two types:  <br> i)SA0 fault <br>ii)SA1 fault</p>
    <p id="sa0"><b>SA0 Fault</b>
    <br> When a signal, or gate output, is stuck at 0 value, independent of the inputs to the circuit, then the signal is said to be "stuck at 0 fault" or "SA0 fault".</p>
    <p class="intro"><b>SA1 Fault</b><br> When a signal, or gate output, is stuck at 1 value, independent of the inputs to the circuit, then the signal is said to be "stuck at 1 fault" or  "SA1 fault".</p>
    <p class="intro">Output for the even parity bit when there is a stuck-at fault</p>
    <p class="intro"><b>Example:</b> <br> Suppose there is a stuck-at 0 fault in wire A.  <br>
     <br><img id="img4" src="images/bit.png" alt="K-map" >
     <p id="fig4" ><b>Figure-3: Kmap for parity bit</b></p>
     <p class="intro">
    <br>&emsp;&emsp;P = A'B'C + A'BC'
    <br>&emsp;&emsp;P = A'(B ⊕ C)     {A' is 1 since A has SA0}
    <br>&emsp;&emsp;P = B⊕C</p>
    <img id="img5"src="imgages/stuckat.png" alt="truth table for epv" >
    <p id="fig5" ><b>Table-2: Table For Even Parity Bit with Stuck-at Fault </b></p>
    
