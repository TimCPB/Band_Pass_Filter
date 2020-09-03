### Band Pass Filter

Client makes digital audio plugins that allow musicians to modify track sounds

Client wants a new filter - *Band Pass Filter*

  - Allows only one band (range of frequencies) to pass through it. Any frequencies outside the band are cut off
  - Given an array of frequencies, each frequency an integer
  - 2 frequency limits - 40mHz lower, 1000mHz upper
  - Would like to be able to be able to modify lower and upper limits, supplying the new limit as an argument
  - Return an array with all the frequencies that fall outside the limits adjusted to bring them back within range
  - No negative numbers
  - Throw error if value is corrupted - e.g. null - anything not integer 

| Inout           | Output          |
|-----------------|-----------------|
| [50]            | [50]            |
| [1050]          | [1000]          |
| [20]            | [40]            |
| [50, 100, 1500] | [50, 100, 1000] |
| [30, 50, 1050   | [40, 50, 1000]  |
| [50, null]      | Throw error     |
