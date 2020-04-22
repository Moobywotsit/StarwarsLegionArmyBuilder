import * as React from 'react';
import { PanResponder, Platform, StyleSheet, Text, Image, View, Animated } from 'react-native';
import Draggable from 'react-native-draggable';

export default function App() {
  return (
    <View style={styles.container}>
      <DraggableUnitCard unitImage={CardImages.units.ObiWan}/>
      <DraggableUnitCard unitImage={CardImages.units.Phase1CloneTroopers}/>
      <DraggableUnitCard unitImage={CardImages.units.Phase1CloneTroopers}/>
      <DraggableUnitCard unitImage={CardImages.units.Phase2CloneTroopers}/>
      <DraggableUnitCard unitImage={CardImages.units.BarcSpeeder}/>
      <DraggableUnitCard unitImage={CardImages.units.TX130SaberClassFighterTank}/>
    </View>
  );
}

function DraggableUnitCard(props){
  return (
    <View style={{width: 418, height: 300, marginBottom: 10}}>
      <Draggable>
        <Image style={{width: 418, height: 300}} source={props.unitImage} />  
      </Draggable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //makes it fit the whole screen
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
    flexWrap: 'wrap'
  }
});

const CardImages = {
  units: {
    DarthVader: require('./img/DarthVader.png'),
    ZSpeederBikes: require('./img/74-ZSpeederBikes.png'),
    ATST: require('./img/AT-ST.jpg'),
    ObiWan: require('./img/Obi-WanKenobi.png'),
    Phase1CloneTroopers: require('./img/PhaseICloneTroopers.png'),
    Phase2CloneTroopers: require('./img/PhaseIICloneTroopers.png'),
    BarcSpeeder: require('./img/BARCSpeeder.png'),
    TX130SaberClassFighterTank: require('./img/TX-130Saber-ClassFighterTank.png'),
  },
  upgrades: {
    ForcePush: require('./img/upgrades/force/ForcePush.png')
  }
}
