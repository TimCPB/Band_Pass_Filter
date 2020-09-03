Digital audio plugins
musicians - electronic music
makes filters to modify track sounds

### Band Pass Filter

Client makes digital audio plugins that allow musicians to modify track sounds

Client wants a new filter - *Band Pass Filter*

  - allows only one band (range of frequencies) to pass through it. Any frequencies outside the band are cut off

  - given an array of frequencies, each frequency an integer
  - 2 frequency limits - 40mHz lower, 1000mHz upper
  - would like to be able to supply lower and upper limits as arguments
  - Adjust all frequencies outside of the range to bring them within range
  - no negative numbers
  - throw error if value is corrupted - e.g. null - anything not integer 

| Inout           | Output          |
|-----------------|-----------------|
| [50]            | [50]            |
| [50, 100]       | [50, 100]       |
| [50, 100, 1050] | [50, 100, 1000] |
| [30, 100, 200]  | [40, 100, 200]  |
| [50, 200]       | [50, 150]       |
| [50, null]      | Throw error     |
