import React from 'react';
import Slider from 'rn-range-slider';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { Text } from 'react-native-paper';
import debounce from 'lodash.debounce';

const RangeSlider = (props) => {
  const {
    min,
    max,
    step,
    initialLowValue,
    label,
    unit,
    handler,
    currentValue,
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.labelColumn}>
        <Text style={styles.labelText}>{label}</Text>
      </View>
      <View style={styles.sliderColumn}>
        <Slider
          style={styles.slider}
          gravity={'center'}
          min={min}
          max={max}
          step={step}
          rangeEnabled={false}
          onValueChanged={debounce((low, high, fromUser) => {
            handler(low, true);
          }, 250)}
          initialLowValue={initialLowValue}
          lineWidth={8}
          selectionColor="#f2b600"
          blankColor="#141b41"
          labelBackgroundColor="#ffffff"
          labelBorderColor="#141b40"
          labelTextColor="#141b40"
          textSize={25}
          thumbBorderColor="#141b40"
          thumbBorderWidth={2}
          thumbRadius={14}
        />
      </View>
      <View style={styles.valueColumn}>
        <Text style={[styles.labelText, styles.valueText]}>
          {currentValue} {unit}
        </Text>
      </View>
    </View>
  );
};

RangeSlider.propTypes = {
  label: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number,
  handler: PropTypes.func.isRequired,
  initialLowValue: PropTypes.number.isRequired,
  unit: PropTypes.string,
  currentValue: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  labelColumn: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderColumn: {
    flex: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  valueColumn: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    width: '100%',
    height: 80,
  },
  labelText: {
    color: 'white',
    fontSize: 24,
  },
  valueText: {
    fontSize: 35,
    fontWeight: 'bold',
  },
});

export default RangeSlider;
