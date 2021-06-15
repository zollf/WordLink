#!/usr/bin/python

import csv
import json
import sys, getopt

def convert_word_list_to_json(ifp: str, ofp: str) -> None:
  """
  Convert Word dictionary csv list to json file
  test.py -i <inputfile> -o <outputfile>
  """
  word_list_json = {}
  with open(ifp, 'r') as file:
    data = csv.reader(file)
    IS_HEADER = True
    for row in data:
      if (IS_HEADER):
        IS_HEADER = False
      else:
        word_list_json[row[0]] = 1
  
  with open(ofp, 'w') as outfile:
    json.dump(word_list_json, outfile, sort_keys=True, indent=4)

if __name__ == "__main__":
  argv = sys.argv[1:]
  intput_fp = ''
  output_fp = ''
  try:
    opts, args = getopt.getopt(argv,"hi:o:",["ifile=","ofile="])
  except getopt.GetoptError:
    print('test.py -i <inputfile> -o <outputfile>')
    sys.exit(2)
  for opt, arg in opts:
    if opt == '-h':
      print ('test.py -i <inputfile> -o <outputfile>')
      sys.exit()
    elif opt in ("-i", "--ifile"):
      intput_fp = arg
    elif opt in ("-o", "--ofile"):
      output_fp = arg

  convert_word_list_to_json(intput_fp, output_fp)
  print('Done!')