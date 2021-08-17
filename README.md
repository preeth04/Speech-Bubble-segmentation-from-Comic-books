# Segmentation of Speech bubbles from Comic books

This project aims to digitize the works of human efforts by segmenting the textural context of comic book entities into segments that isolates each and every Panels and extract Speech bubbles thus helps in more readability of comic books.

## MODULES
- <a href="#panel-extraction">Panel Extraction</a>
- <a href="#feature-extraction"> Feature Extraction</a>
- <a href="#speech-bubble-localization"> Speech Bubble Localization</a>
- <a href="#speech-bubble-extraction"> Speech Bubble Extraction</a>
- <a href="#speech-text-extraction"> Speech Text Extraction</a>

## Output Screenshots
### Panel Extraction
Input | Extracted Panels
--------- | --------- 
<img align="center" width="700" height="500" src="comic-bubble-segmentation/sample_images/Sample%20Output/05_19_2021_20-44-34-252844/original_input.png"> | <div style="display: inline-block;"> <img style="display: inline; margin: 0 5px;"  width="130" height="350" src="comic-bubble-segmentation/sample_images/Sample%20Output/05_19_2021_20-44-34-252844/panel0/panel0.png"> <img  style="display: inline; margin: 0 5px;"  width="130" height="350" src="comic-bubble-segmentation/sample_images/Sample%20Output/05_19_2021_20-44-34-252844/panel1/panel1.png"> <img style="display: inline; margin: 0 5px;" width="130" height="350" src="comic-bubble-segmentation/sample_images/Sample%20Output/05_19_2021_20-44-34-252844/panel2/panel2.png"> <img style="display: inline; margin: 0 5px;" width="130" height="350" src="comic-bubble-segmentation/sample_images/Sample%20Output/05_19_2021_20-44-34-252844/panel3/panel3.png"> <img style="display: inline; margin: 0 5px;" width="600" height="300" src="comic-bubble-segmentation/sample_images/Sample%20Output/05_19_2021_20-44-34-252844/panel4/panel4.png"> </div>

### Feature Extraction 

| Single Panel | Feature extracted |
| :---------: | :---------: |
| <img  width="250" height="550"  src="comic-bubble-segmentation/sample_images/Sample%20Output/05_19_2021_20-44-34-252844/panel0/panel0.png"> | ![feature](comic-bubble-segmentation/sample_images/Sample%20Output/05_19_2021_20-44-34-252844/panel0/contour.png) |

### Speech Bubble Localization

| Single Panel | Localisation |
| :---------: | :---------: |
| <img  width="270" height="720"  src="comic-bubble-segmentation/sample_images/Sample%20Output/05_19_2021_20-44-34-252844/panel0/panel0.png"> | <img  width="270" height="720"  src="https://github.com/preeth04/Speech-Bubble-segmentation-from-Comic-books/blob/master/comic-bubble-segmentation/sample_images/Sample%20Output/05_19_2021_20-44-34-252844/panel0/localized_bubbles.png">
### Speech Bubble Extraction

| Localised Bubbles | Extracted Bubbles |
| :---------: | :---------: |
| <img  width="270" height="720"  src="https://github.com/preeth04/Speech-Bubble-segmentation-from-Comic-books/blob/master/comic-bubble-segmentation/sample_images/Sample%20Output/05_19_2021_20-44-34-252844/panel0/localized_bubbles.png"> | <img  src="https://github.com/preeth04/Speech-Bubble-segmentation-from-Comic-books/blob/master/comic-bubble-segmentation/sample_images/Sample%20Output/05_19_2021_20-44-34-252844/panel0/segmented_bubbles/cropped_imgs0.png"> <img  src="https://github.com/preeth04/Speech-Bubble-segmentation-from-Comic-books/blob/master/comic-bubble-segmentation/sample_images/Sample%20Output/05_19_2021_20-44-34-252844/panel0/segmented_bubbles/cropped_imgs1.png">  

### Speech Text Extraction

Extractec Bubble | Text
| :---------: | :---------: |
| <img  src="https://github.com/preeth04/Speech-Bubble-segmentation-from-Comic-books/blob/master/comic-bubble-segmentation/sample_images/Sample%20Output/05_19_2021_20-44-34-252844/panel0/segmented_bubbles/cropped_imgs0.png"> | [`NOW YOU’RE JUST TRYING TO RUB IT IN.`](https://github.com/preeth04/Speech-Bubble-segmentation-from-Comic-books/blob/master/comic-bubble-segmentation/sample_images/Sample%20Output/05_19_2021_20-44-34-252844/panel0/extracted_text.txt) |
|  <img  src="https://github.com/preeth04/Speech-Bubble-segmentation-from-Comic-books/blob/master/comic-bubble-segmentation/sample_images/Sample%20Output/05_19_2021_20-44-34-252844/panel0/segmented_bubbles/cropped_imgs1.png"> | [`YOU CAN HELP PROVIDED YOU STAY OUT OF MY WAY`](https://github.com/preeth04/Speech-Bubble-segmentation-from-Comic-books/blob/master/comic-bubble-segmentation/sample_images/Sample%20Output/05_19_2021_20-44-34-252844/panel0/extracted_text.txt) |


## Acknowledgement

Special thanks to my team [@paarshan4800](https://github.com/paarshan4800) and [@akashkirthik](https://github.com/akashkirthik) for developing this application as a part of my Creative and Innovative project :heart:

