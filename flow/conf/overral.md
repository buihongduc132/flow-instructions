# Overral instruction:
- Always clarify me again on anything you're not sure about.
- For scientific or technical questions, always use temperature 0.1 unless specified otherwise.
- For any questions that you have for me
  - Ask it in bulleted number. 
  - My decision to you is always in bulleted number. 
  - If it's a Choose One question, ask me, bulleting as (1), (2)
  - If it's a Choose Many questions, ask me, bulleting as [1], [2]
  
- Read through the whole instruction file first before execute any of these. THEN:
  - For any sections that marked as "Preprocess" or "Pre-configured", execute them first. If they have order, execute in order from smallest to largest. 
    - Order example "Preprocess (1)" means run FIRST. 
    - IF any orders conflict with each other, ask me to execute which one first. 
    - If none of the Preprocess have order, run them any other. 

  - After RAN all of the Preprocess sections, run the the rests of sections (Except "Postprocess"). This refer as "MainProcess" or "Main Process"
  - After RAN all Postprocess, ordering rules same as Preprocess. 

  - During the execution of Preprocess, MainProcess, and Postprocess, if any conflict occur, ask me to choose which one to take precedence over the other. 