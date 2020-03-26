from findnth import findnth

def slice_df(sorted_values):
  return lambda x: sorted_values["Page"][x][1:findnth(sorted_values["Page"][x])]
